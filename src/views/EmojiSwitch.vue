<template>
  <div class="container" id="main-container">
    <div class="emoji-switch-wrapper">
      <div class="left">
        <div
          ref="src-img"
          class="previewer src-img-previewer"
          :style="'background-image: url('+ srcImage + ')'"
        >
        </div>
      </div>
      <div class="middle">
        <div class="button plain-btn switch-btn" @click="handleSelectFileClick">
          <input 
            ref="upload-input" 
            type="file" 
            id="upload-input" 
            accept="image/png,image/jpeg" 
            @change="handleSelectFile($event)"
            name="upload"
          >
          <span>选择文件</span>
        </div>
        <div class="button download-btn switch-btn" @click="handlerEmojiSwitch">
          开始表情换脸
        </div>
      </div>
      <div class="right">
        <div
          ref="dst-img"
          class="previewer dst-img-previewer"
          :style="'background-image: url('+ dstImage + ')'"
        ></div>
      </div>
    </div>
    <div class="settings">
      <el-radio-group v-model="mode" class="mode-wrap">
        <el-radio :label="'cover'">替换人脸</el-radio>
        <el-radio :label="'circle'">环绕人脸</el-radio>
      </el-radio-group>
      <div class="download-image-btn-wrap">
        <a :href="dstImage" download="">
          <div 
            class="button download-btn download-image-btn" 
            :style="{ 'display': isDownloadBtnVisible ? 'inline-block': 'none' }"
          >
          下载图片
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'whatwg-fetch';
import { Loading, Radio, RadioGroup } from 'element-ui';

export default {
  components : {
    "el-radio": Radio,
    "el-radio-group": RadioGroup,
  },

  data() {
    return {
      srcImage: "",
      dstImage: "",
      srcFile: "",
      mode: "cover",
      isDownloadBtnVisible: false,
    };
  },

  methods: {
    handleSelectFile(e) {
      let file = e.target.files[0]
      this.srcFile = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.srcImage = e.target.result;
      }
    },

    handleSelectFileClick() {
      const uploadInput = this.$refs["upload-input"];
      uploadInput.click();
    },

    async handlerEmojiSwitch() {
      if (!this.srcImage) return;

      const loading = Loading.service({
        fullscreen: true,
        lock: true,
        text: '表情换脸中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      try {
        let formData = new FormData();
        formData.append("upload", this.srcFile);
        formData.append("is_front", null);
        formData.append("mode", this.mode);

        let res = await fetch('http://47.93.202.244:8081/emoji', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Access-Control-Allow-Credentials': 'true',
          },
          body: formData,
        });

        res = await res.json();
        if (!res.success) {
          this.$message({
            message: res.res,
            type: 'warning'
          })
        } else {
          this.$message({
            message: '表情换脸成功',
            type: 'success',
          });
          this.dstImage = `http://47.93.202.244:8081${res.res.img_path}`;
          this.isDownloadBtnVisible = true;
        }

      } catch (error) {
        this.$message({
          message: error.message,
          type: 'warning'
        })
      } finally {
        loading.close();
      }
    }
  }
};
</script>

<style>
.left, .right {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#main-container {
  width: 85%;
  margin-bottom: 50px;
}

.emoji-switch-wrapper {
  display: flex;
  flex-direction: row;
  margin: 50px auto 20px;
  justify-content: space-around;
}

#upload-input {
  display: none;
}

.middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.settings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mode-wrap {
  margin: 15px 10px;
}

.download-image-btn-wrap {
  margin-top: 5px;
  width: 400px;
  text-align: center;
}

@media(max-width: 1200px) {
  .emoji-switch-wrapper {
    flex-direction: column;
  }

  #main-container {
    width: 100%;
  }

  .previewer {
    width: 100%;
    height: 400px;
  }

  .middle {
    margin: 30px auto;
  }

  .settings {
    flex-direction: column;
    justify-content: center;
  }

  .mode-wrap {
    text-align: center;
  }

  .download-image-btn-wrap {
    width: 100%;
    margin-top: 30px;
  }
}

@media(max-width: 768px) {
  #main-container {
    padding: 0 20px;
  }
}
</style>
