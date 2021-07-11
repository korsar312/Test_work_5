import { createWebHistory, createRouter } from "vue-router";
import Main from '../pages/Main'
import About from '../pages/About'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
    {
        path: '/about/:id',
        name: 'about',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router




