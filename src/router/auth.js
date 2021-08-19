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
        path: '/signup',
        name: 'SignUp',
        component: () => import('./../views/signUp.vue'),
        meta: {
            layout: 'default',
        },
    },
];
