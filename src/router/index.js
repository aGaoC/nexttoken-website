import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Solutions from '../views/Solutions.vue'
import SolutionDetail from '../views/SolutionDetail.vue'
import NotFound from '../views/NotFound.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
console.log(createWebHashHistory())

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions
  },
  {
    path: '/solutions/:id',
    name: 'SolutionDetail',
    component: SolutionDetail,
    props: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 可以在这里添加全局的导航逻辑
  console.log('Navigating to:', to.path)
  next()
})

export default router 