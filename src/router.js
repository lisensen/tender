import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './view/home/'
import Success from './view/success/'
export default new VueRouter ({
    routes: [
        {
            path: '/',
            redirect: '/home'  //设置默认指向
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/success',
            component: Success
        }
    ]
})