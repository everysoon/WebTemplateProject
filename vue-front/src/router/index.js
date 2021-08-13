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
        children: [
            {
                path:'1',
                name:'StartHome',
                component:()=>import('@/layouts/start/StartHome')
            },
            {
                path:'2',
                name:'StartInvite',
                component:()=>import('@/layouts/start/StartInvite')
            },
            {
                path:'3',
                name:'StartPhoto',
                component:()=>import('@/layouts/start/StartPhoto')
            },
            {
                path:'4',
                name:'StartSNS',
                component:()=>import('@/layouts/start/StartSNS')
            },
            {
                path:'5',
                name:'StartCome',
                component:()=>import('@/layouts/start/StartCome')
            },
            {
                path:'6',
                name:'StartCongratulation',
                component:()=>import('@/layouts/start/StartCongratulation')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
