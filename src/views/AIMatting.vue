<template>
  <div class="container" id="main-container">
    <div class="emoji-switch-wrapper">
      <div class="left">
        <div
          ref="src-img"
          class="previewer src-img-previewer small-previewer"
          :style="'background-image: url('+ srcImage + ')'"
        >
        </div>
        <div
          ref="bg-img"
          class="previewer src-img-previewer small-previewer"
          :style="'background-image: url('+ bgImage + ')'"
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
            @change="handleSelectFile($event, 'src')"
            name="upload"
          >
          <span>选择文件</span>
        </div>
        <div class="button plain-btn switch-btn" @click="handleSelectBgFileClick">
          <input 
            ref="upload-input-bg" 
            type="file" 
            id="upload-input" 
            accept="image/png,image/jpeg" 
            @change="handleSelectFile($event, 'bg')"
            name="upload"
          >
          <span>选择背景</span>
        </div>
        <div class="button download-btn switch-btn" @click="handlerEmojiSwitch">
          开始AI抠图
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
      <el-radio-group v-model="isBackground" class="mode-wrap">
        <el-radio :label="false">无背景</el-radio>
        <el-radio :label="true">使用背景</el-radio>
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
      srcFile: "",
      bgImage: "",
      bgFile: "",
      dstImage: "",
      isDownloadBtnVisible: false,
      isBackground: false,
    };
  },

  methods: {
    handleSelectFile(e, fileType) {
      let file = e.target.files[0]
      this[`${fileType}File`] = file;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this[`${fileType}Image`] = e.target.result;
      }
    },

    handleSelectFileClick() {
      const uploadInput = this.$refs["upload-input"];
      uploadInput.click();
    },

    handleSelectBgFileClick() {
      const uploadInput = this.$refs["upload-input-bg"];
      uploadInput.click();
    },

    async handlerEmojiSwitch() {
      if (!this.srcImage) return;

      const loading = Loading.service({
        fullscreen: true,
        lock: true,
        text: 'AI抠图中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      try {
        let formData = new FormData();
        formData.append("upload", this.srcFile);
        formData.append("background", this.bgFile);
        formData.append("is_front", null);
        formData.append("is_background", this.isBackground);


        let res = await fetch('http://47.93.202.244:8081/matting', {
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
            message: 'AI抠图成功',
            type: 'success',
          });

          console.log(res);

          this.dstImage = `http://47.93.202.244:8081${res.res.res_img_path}`;
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

.left {
  height: 600px;
  justify-content: space-between;
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

.small-previewer {
  height: 290px;
}

@media(max-width: 1200px) {
  .emoji-switch-wrapper {
    flex-direction: column;
  }

  .small-previewer:not(:first-child) {
    margin-top: 20px;
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
