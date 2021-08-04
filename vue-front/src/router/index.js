import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: () => import('@/layouts/default/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('@/views/Home')
            },
            {
                path: '/util',
                name: 'Util',
                component: () => import('@/views/Util')
            },
            {
                path:'/qna',
                name: 'QnA',
                component:()=>import('@/views/QnA')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
