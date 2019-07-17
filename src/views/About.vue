<template>
  <div class="container">
    <div class="about-wrapper">
      <div class="title">
        关于我们 😎
      </div>
      <div class="content">
        <p>我们是一个充满创造力的生产实习团队。</p>
        <br />
        <p>致力于用我们的所学，设计出基于ResNet的表情识别😁，基于Xception+DeepLab的语义分割🤖等AI模型。</p>
        <br />
        <p>以及基于APP框架Flutter搭建的“EMOJI 相机”客户端📱，基于前端框架Vue搭建的“EMOJI 相机”web端🌐。</p>
        <br />
        <p>我们创新性地为传统的相机APP赋予了AI+社交双重属性✌️：</p>
        <p>可爱的EMOJI表情或是替换、或是环绕，展现你的心情，随心分享；AI抠图让你即便暂时难以触达，也能身临其境。</p>
        <br />
        <p>我们对基于Flask服务端进行了近乎严苛的调试💪：</p>
        <p>docker容器化云端部署、opencv+tensorflow模型性能调优，让AI服务更加稳健，兼顾web端和客户端。</p>
        <br />
        <p>最后，感谢您对我们团队的支持，</p>
        <p>感谢我们团队的每一位成员，我们的成果离不开每一个人的付出👍</p>
        <br />
        <br />
        <p>项目各模块的GitHub仓库：</p>
        <br />
        <p>emoji-camera: &nbsp;&nbsp;<a href="https://github.com/lmy98129/emoji-camera">https://github.com/lmy98129/emoji-camera</a></p>
        <p>emoji-camera-server: &nbsp;&nbsp;<a href="https://github.com/lmy98129/emoji-camera-server">https://github.com/lmy98129/emoji-camera-server</a></p>
        <p>emotional_detection_with_resnet: &nbsp;&nbsp;<a href="https://github.com/swaggymiller/emotional_detection_with_resnet">https://github.com/swaggymiller/emotional_detection_with_resnet</a></p>
        <p>Portrait-Segmentation-Transparency: &nbsp;&nbsp;<a href="https://github.com/XiXiangkun/Portrait-Segmentation-Transparency">https://github.com/XiXiangkun/Portrait-Segmentation-Transparency</a></p>
        <p>emoji-camera-landing-page: &nbsp;&nbsp;<a href="https://github.com/lmy98129/emoji-camera-landing-page">https://github.com/lmy98129/emoji-camera-landing-page</a></p>
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
.about-wrapper {
  margin-top: 60px;
}

.content {
  margin-top: 40px;
  font-size: 23px;
  margin-bottom: 120px;
}

.content p {
  word-break: break-all;
}
</style>

