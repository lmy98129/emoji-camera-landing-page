<template>
  <header>
    <div class="navbar navbar-fixed">
      <div class="container">
        <div class="navbar-content">
          <!-- logo标题 -->
          <a class="header-logo" href="/">EMOJI 相机 📸</a>
          <!-- 中部 -->
          <div class="navbar-list-wrapper">
            <ul class="navbar-list">
              <!-- Main Links-->
              <li class="navbar-item">
                <router-link class="navbar-link" to="/">首页</router-link>
              </li>
              <li class="navbar-item">
                <router-link class="navbar-link" to="/emoji-switch">表情换脸</router-link>
              </li>
              <li class="navbar-item">
                <router-link class="navbar-link" to="/ai-matting">AI抠图</router-link>
              </li>
              <li class="navbar-item">
                <router-link class="navbar-link" to="/about">关于我们</router-link>
              </li>
            </ul>
          </div>
          <!-- 右侧下载按钮 -->
          <a href="http://47.93.202.244:8081/static/app-release.apk">
            <div class="nav-bar-right button download-btn">
              APP下载
            </div>
          </a>
          <div 
            class="menu-btn iconfont icon-menu" 
            style="display: none"
            @click="switchMenuVisible"
          ></div>
        </div>
      </div>
      <ul class="menu-wrap" id="menu" :style="{'display' : isMenuVisible ? 'block': 'none'}">
        <li class="navbar-item">
          <router-link class="navbar-link" to="/">首页</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/emoji-switch">表情换脸</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/ai-matting">AI抠图</router-link>
        </li>
        <li class="navbar-item">
          <router-link class="navbar-link" to="/about">关于我们</router-link>
        </li>
      </ul>
    </div>
    <div class="header-holder"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    }
  },

  mounted() {
    // 窗口改变尺寸回调
    window.onresize = () => {
      if (document.documentElement.clientWidth > 768) {
        this.isMenuVisible = false;
      }
    }
  },

  methods: {
    switchMenuVisible() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
};
</script>

<style>
.navbar {
  background-color: #fff;
  min-height: 80px;
  position: relative;
  border-bottom: 1px solid #ccc;
}

.header-logo {
  font-size: 20px;
}

.header-holder {
  height: 80px;
}

.navbar.navbar-fixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

.navbar-list {
  display: flex;
}

.navbar-list-wrapper.active .navbar-list {
  flex-direction: column;
  align-items: center;
}

.navbar-list-wrapper .navbar-item {
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-item,
.navbar-link {
  display: block;
  position: relative;
  color: #333;
  cursor: pointer;
}

.navbar-item.active,
.navbar-item:hover,
.navbar-link.active,
.navbar-link:hover {
  background-color: rgba(0, 0, 0, 0);
  color: #000;
}

@media(max-width: 768px) {
  .navbar-list-wrapper, .nav-bar-right {
    display: none;
  }

  .menu-btn {
    font-size: 23px!important;
    display: block!important;
    cursor: pointer;
  }

  .menu-wrap {
    position: relative;
    top: 0px;
  }

  .menu-wrap li {
    width: 100%;
    text-align: center;
    padding: 20px;
    background: #fff;
    cursor: pointer;
    border-bottom: solid .1px #ccc;
  }

  .menu-wrap li:first-child {
    border-top: solid .1px #ccc;
  }

  .menu-wrap li:last-child {
    border-bottom: none;
  }
  
  .menu-wrap li a {
    color: #000;
  }
}

</style>

