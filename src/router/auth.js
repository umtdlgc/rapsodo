export default [
    {
        path: '/',
        name: 'SignIn',
        component: () => import('./../views/signIn.vue'),
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/forgetPassword',
        name: 'ForgetPassword',
        component: () => import('./../views/forgetPassword.vue'),
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/homepage',
        name: 'Homepage',
        component: () => import('./../views/homepage.vue'),
        meta: {
            layout: 'authenticated',
        },
    },
];
