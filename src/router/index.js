import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Columnar from '../views/Columnar.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/columnar', name: 'Columnar', component: Columnar }
]

const router = new VueRouter({
    routes
})

export default router
