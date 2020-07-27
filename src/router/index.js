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
    name: 'Home',
    component: Home,
  },
  {
    path: '/columnar',
    component: Columnar,
    children: [
      {
        path: '/columnar/description',
        name: 'ColumnarDescription',
        component: ColumnarDescription,
      },
      {
        path: '/columnar/convert',
        name: 'ColumnarConvert',
        component: ColumnarConvert,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes,
})

export default router
