<template>
  <div class="container">
    <div class="promo-wrapper">
      <div class="promo-banner">
        <img id="switch-face-demo" :src="switchFaceDemo" />
        <img id="switch-face-demo-real" :src="switchFaceDemoReal" />
      </div>
      <div class="promo-content">
        <p class="title title-1">一款懂你表情的</p>
        <p class="title title-2">AI 相机</p>
        <div class="button-wrap">
          <a href="http://github.com/lmy98129/emoji-camera">
            <div class="button plain-btn github-btn">GitHub</div>
          </a>
          <div class="button download-btn">APP下载</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import switchFaceDemo from '@/assets/switch-face-demo.png';
import switchFaceDemoReal from '@/assets/switch-face-demo-real.png';

export default {
  name: 'home',
  data() {
    return {
      switchFaceDemo,
      switchFaceDemoReal,
    }
  },
  components: {
    
  }
}
</script>

<style>

.promo-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px auto 20px;
}

#switch-face-demo {
  height: 600px;
  width: auto;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  position: absolute;
  z-index: 200;
}

#switch-face-demo-real {
  height: 600px;
  width: auto;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  position: relative;
}

#switch-face-demo:hover {
  opacity: 0;
  transition-delay: 0.3s!important;
}

.promo-content {
  padding-top: 200px;
  padding-left: 80px;
}

.title-2 {
  font-size: 35px;
  font-weight: bolder;
}

.button-wrap {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: -10px;
}

.github-btn {
  margin-right: 10px;
}

@media(max-width: 768px) {
  .promo-wrapper {
    flex-direction: column;
  }

  .promo-banner {
    margin: 0 auto;
  }

  #switch-face-demo, #switch-face-demo-real {
    height: auto;
    width: 300px;
  }

  .promo-content {
    padding: 0;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }

  .button-wrap {
    margin-left: 0;
    justify-content: center;
    margin-bottom: 50px;
  }
}

@media(max-width: 414px) {
  #switch-face-demo, #switch-face-demo-real {
    width: 250px;
  }

  .promo-wrapper {
    margin-top: -25px;
  }
}
</style>

