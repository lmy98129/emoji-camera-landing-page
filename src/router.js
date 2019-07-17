import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: Home
    },
    {
      path: '/emoji-switch',
      name: 'emoji-switch',
      meta: { title: '表情换脸' },
      component: () => import(/* webpackChunkName: "emoji-switch" */ './views/EmojiSwitch.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '关于' },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ai-matting',
      name: 'ai-matting',
      meta: { title: 'AI抠图' },
      component: () => import(/* webpackChunkName: "ai-matting" */ './views/AIMatting.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - EMOJI相机`
  }
  next()
})

export default router;