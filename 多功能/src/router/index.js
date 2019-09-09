import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/order'
        },
        {
            path: '/order',
            name: 'Order',
            component: () => import('@/views/Order')
        },
        {
            path: '/evaluate',
            name: 'Evaluate',
            component: () => import('@/views/Evaluate')
        },
        {
            path: '/merchant',
            name: 'Merchant',
            component: () => import('@/views/Merchant')
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: () => import('@/views/Details')
        }
    ]
}) 
