import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

import Columnar from '@/views/Columnar.vue'
import ColumnarDescription from '@/components/columnar/Description.vue'
import ColumnarConvert from '@/components/columnar/Convert.vue'

import RailFence from '@/views/RailFence.vue'
import RailFenceDescription from '@/components/railfence/Description.vue'
import RailFenceConvert from '@/components/railfence/Convert.vue'
import RailFenceSolve from '@/components/railfence/Solve.vue'

import Ubchi from '@/views/Ubchi.vue'
import UbchiDescription from '@/components/ubchi/Description.vue'
import UbchiConvert from '@/components/ubchi/Convert.vue'

import Myszkowski from '@/views/Myszkowski.vue'
import MyszkowskiDescription from '@/components/myszkowski/Description.vue'
import MyszkowskiConvert from '@/components/myszkowski/Convert.vue'

import Fleissner from '@/views/Fleissner.vue'
import FleissnerDescription from '@/components/fleissner/Description.vue'
import FleissnerConvert from '@/components/fleissner/Convert.vue'

import Route from '@/views/Route.vue'
import RouteDescription from '@/components/route/Description.vue'
import RouteConvert from '@/components/route/Convert.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Transpoziční šifry'
    },
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
        meta: {
          title: 'Sloupcová transpozice | Popis'
        },
        component: ColumnarDescription
      },
      {
        path: 'convert',
        name: 'columnar.convert',
        meta: {
          title: 'Sloupcová transpozice | Převod'
        },
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
        meta: {
          title: 'Rail Fence šifra | Popis'
        },
        component: RailFenceDescription
      },
      {
        path: 'convert',
        name: 'railfence.convert',
        meta: {
          title: 'Rail Fence šifra | Převod'
        },
        component: RailFenceConvert
      },
      {
        path: 'solve',
        name: 'railfence.solve',
        meta: {
          title: 'Rail Fence šifra | Prolomení'
        },
        component: RailFenceSolve
      }
    ]
  },
  {
    path: '/ubchi',
    component: Ubchi,
    name: 'ubchi',
    redirect: {
      name: 'ubchi.description'
    },
    children: [
      {
        path: 'description',
        name: 'ubchi.description',
        meta: {
          title: 'ÜBCHI šifra | Popis'
        },
        component: UbchiDescription
      },
      {
        path: 'convert',
        name: 'ubchi.convert',
        meta: {
          title: 'ÜBCHI šifra | Převod'
        },
        component: UbchiConvert
      }
    ]
  },
  {
    path: '/myszkowski',
    component: Myszkowski,
    name: 'myszkowski',
    redirect: {
      name: 'myszkowski.description'
    },
    children: [
      {
        path: 'description',
        name: 'myszkowski.description',
        meta: {
          title: 'Myszkowskiho transpozice | Popis'
        },
        component: MyszkowskiDescription
      },
      {
        path: 'convert',
        name: 'myszkowski.convert',
        meta: {
          title: 'Myszkowskiho transpozice | Převod'
        },
        component: MyszkowskiConvert
      }
    ]
  },
  {
    path: '/fleissner',
    component: Fleissner,
    name: 'fleissner',
    redirect: {
      name: 'fleissner.description'
    },
    children: [
      {
        path: 'description',
        name: 'fleissner.description',
        meta: {
          title: 'Fleissnerova mřížka | Popis'
        },
        component: FleissnerDescription
      },
      {
        path: 'convert',
        name: 'fleissner.convert',
        meta: {
          title: 'Fleissnerova mřížka | Převod'
        },
        component: FleissnerConvert
      }
    ]
  },
  {
    path: '/route',
    component: Route,
    name: 'route',
    redirect: {
      name: 'route.description'
    },
    children: [
      {
        path: 'description',
        name: 'route.description',
        meta: {
          title: 'Route šifra | Popis'
        },
        component: RouteDescription
      },
      {
        path: 'convert',
        name: 'route.convert',
        meta: {
          title: 'Route šifra | Převod'
        },
        component: RouteConvert
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Transpoziční šifry'
  next()
})

export default router
