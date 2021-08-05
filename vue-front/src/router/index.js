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
                component:()=>import('@/layouts/default/QnALayout'),
                chlidren:[
                    {
                        path:'notice',
                        name:"Notice",
                        component:()=>import('@/views/qna/Notice')
                    },
                    {
                        path:'guide',
                        name:"Guide",
                        component:()=>import('@/views/qna/Guide')
                    }
                ]
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
