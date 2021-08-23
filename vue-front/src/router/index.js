import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: () => import('@/layouts/default/DefaultLayout'),
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
                component:()=>import('@/views/QnA'),
            },
            {
                path:'/affect',
                name:'Affect',
                component:()=>import('@/views/Affect')
            }
        ],
    },
    {
        path:'/auth',
        name:'AuthLayout',
        component:()=>import('@/layouts/auth/AuthLayout'),
        children: [
            {
                path:'sign-in',
                name:'SignIn',
                component:()=>import('@/views/auth/SignIn')
            },
            {
                path:'sign-up',
                name:'SignUp',
                component:()=>import('@/views/auth/SignUp')
            }
        ]
    },
    {
        path:'/start',
        name:'StartLayout',
        component:()=>import('@/layouts/start/StartLayout'),

    },
    {
        path:'/write',
        name:'Write',
        component:()=>import('@/views/Write')
    },
    {
        path:'/read',
        name:'Read',
        component:()=>import('@/views/Read')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
