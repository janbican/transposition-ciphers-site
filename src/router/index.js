import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Columnar from '@/views/Columnar.vue'
import ColumnarDescription from '@/components/columnar/Description.vue'
import ColumnarConvert from '@/components/columnar/Convert.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/columnar',
    component: Columnar,
    name: 'columnar',
    redirect: {
      name: 'columnar.description'
    },
    children: [
      {
        path: 'description',
        name: 'columnar.description',
        component: ColumnarDescription
      },
      {
        path: 'convert',
        name: 'columnar.convert',
        component: ColumnarConvert
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

export default router
