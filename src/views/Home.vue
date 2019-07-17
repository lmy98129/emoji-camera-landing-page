<template>
  <div class="container">
    <div class="promo-wrapper">
      <div class="promo-banner">
        <img id="switch-face-demo" :src="switchFaceDemo" />
        <img id="switch-face-demo-real" :src="switchFaceDemoReal" />
      </div>
      <div class="promo-content promo-content-right">
        <p class="title title-1">一款懂你表情的</p>
        <p class="title title-2">AI 相机</p>
        <div class="button-wrap">
          <a href="http://github.com/lmy98129/emoji-camera">
            <div class="button plain-btn github-btn">GitHub</div>
          </a>
          <a href="http://47.93.202.244:8081/static/app-release.apk">
            <div class="button download-btn">APP下载</div>
          </a>
        </div>
      </div>
    </div>
    <div class="promo-wrapper reverse">
      <div class="promo-content promo-content-left">
        <p class="title title-1">AI一键抠图</p>
        <p class="title title-2">让你身临其境</p>
        <div class="button-wrap">
          <a href="http://github.com/lmy98129/emoji-camera">
            <div class="button plain-btn github-btn">GitHub</div>
          </a>
          <a href="http://47.93.202.244:8081/static/app-release.apk">
            <div class="button download-btn">APP下载</div>
          </a>
        </div>
      </div>
      <div class="promo-banner">
        <img id="ai-matting-demo" :src="aiMattingDemo" />
        <img id="ai-matting-demo-real" :src="aiMattingDemoReal" />
      </div>
    </div>
    <div class="promo-wrapper">
      <div class="promo-banner">
        <img id="switch-face-circle-demo" :src="switchFaceCircleDemo" />
        <img id="switch-face-circle-demo-real" :src="switchFaceCircleDemoReal" />
        <img id="ai-matting-desktop" :src="aiMattingDesktop" />
      </div>
      <div class="promo-content promo-content-right promo-content-wide">
        <p class="title title-1">更多AI功能</p>
        <p class="title title-2">等待您的探索🤓</p>
        <div class="button-wrap">
          <a href="http://github.com/lmy98129/emoji-camera">
            <div class="button plain-btn github-btn">GitHub</div>
          </a>
          <a href="http://47.93.202.244:8081/static/app-release.apk">
            <div class="button download-btn">APP下载</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import switchFaceDemo from '@/assets/switch-face-demo.png';
import switchFaceDemoReal from '@/assets/switch-face-demo-real.png';
import aiMattingDemo from '@/assets/ai-matting-demo.png';
import aiMattingDemoReal from '@/assets/ai-matting-demo-real.png';
import switchFaceCircleDemo from '@/assets/switch-face-circle-demo.png';
import switchFaceCircleDemoReal from '@/assets/switch-face-circle-demo-real.png';
import aiMattingDesktop from '@/assets/ai-matting-desktop.png';

export default {
  name: 'home',
  data() {
    return {
      switchFaceDemo,
      switchFaceDemoReal,
      aiMattingDemo,
      aiMattingDemoReal,
      switchFaceCircleDemo,
      switchFaceCircleDemoReal,
      aiMattingDesktop,
    }
  },
}
</script>

<style>

.promo-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px auto 20px;
}

.promo-wrapper:last-child {
  margin-top: 200px;
  margin-bottom: 200px;
}

#switch-face-demo, #ai-matting-demo, #switch-face-circle-demo {
  height: 800px;
  width: auto;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  position: absolute;
  z-index: 200;
}

#switch-face-demo-real, #ai-matting-demo-real, #switch-face-circle-demo-real {
  height: 800px;
  width: auto;
  transition: all .25s cubic-bezier(.02,.01,.47,1);
  position: relative;
}

#switch-face-demo:hover, #ai-matting-demo:hover, #switch-face-circle-demo:hover {
  opacity: 0;
  transition-delay: 0.3s!important;
}

#switch-face-circle-demo-real,  #switch-face-circle-demo, #ai-matting-desktop {
  height: 400px;
}

#ai-matting-desktop {
  position: relative;
  left: -130px;
  top: -30px;
}

.promo-content {
  padding-top: 300px;
}

.promo-content.promo-content-right {
  padding-left: 60px;
}

.promo-content.promo-content-left {
  padding-right: 80px;
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

.promo-content-wide {
  padding-left: 0!important;
  padding-top: 70px;
  margin-left: -92px;
}

@media(max-width: 1090px) {
  #ai-matting-desktop {
    width: 500px;
    height: auto;
  }

  #switch-face-circle-demo, #switch-face-circle-demo-real {
    height: 350px;
  }
}

@media(max-width: 950px) {
  #ai-matting-desktop {
    width: 380px;
    height: auto;
  }

  #switch-face-circle-demo, #switch-face-circle-demo-real {
    height: 280px;
  }
}

@media(max-width: 768px) {
  .promo-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .promo-banner {
    margin: 0 auto;
  }

  #switch-face-demo, #ai-matting-demo, #switch-face-circle-demo,
  #switch-face-demo-real, #ai-matting-demo-real, #switch-face-circle-demo-real {
    height: auto;
    width: 300px;
  }

  .promo-content {
    padding: 0!important;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }

  .promo-wrapper.reverse {
    flex-direction: column-reverse;
  }

  .button-wrap {
    margin-left: 0;
    justify-content: center;
    margin-bottom: 50px;
  }

  .promo-wrapper:last-child {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  #ai-matting-desktop {
    width: 100%;
    height: auto;
    position: initial;
    left: 0;
    top: 0;
    margin-bottom: 20px;
    margin-top: -10px;
  }
}

@media(max-width: 320px) {
  #switch-face-demo, #ai-matting-demo, #switch-face-circle-demo,
  #switch-face-demo-real, #ai-matting-demo-real, #switch-face-circle-demo-real {
    width: 250px;
  }

  .promo-wrapper {
    margin-top: -25px;
  }

}
</style>

