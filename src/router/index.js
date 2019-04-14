import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index.vue'
import file from '@/components/file.vue'
import error from '@/components/error.vue'
import blog from '@/components/blog.vue'
import hobby from '@/components/hobby.vue'
import des from '@/components/description.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: HelloWorld,
      component: HelloWorld
    },
    {
      path: '/file',
      name: file,
      component: file
    },
    {
      path: '/hobby',
      name: hobby,
      component: hobby
    },
    {
      path: '/blog',
      name: blog,
      component: blog
    },
    {
      path: '/des',
      name: des,
      component: des
    },
    {
      path: '*',
      name: error,
      component: error
    }
  ]
})
