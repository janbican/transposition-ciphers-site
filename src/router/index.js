import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Columnar from '@/views/Columnar.vue'
import ColumnarDescription from '@/components/columnar/Description.vue'
import ColumnarConvert from '@/components/columnar/Convert.vue'
import RailFence from '@/views/RailFence.vue'
import RailFenceDescription from '@/components/railfence/Description.vue'
import RailFenceConvert from '@/components/railfence/Convert.vue'

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
  },
  {
    path: '/railfence',
    component: RailFence,
    name: 'railfence',
    redirect: {
      name: 'railfence.description'
    },
    children: [
      {
        path: 'description',
        name: 'railfence.description',
        component: RailFenceDescription
      },
      {
        path: 'convert',
        name: 'railfence.convert',
        component: RailFenceConvert
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
