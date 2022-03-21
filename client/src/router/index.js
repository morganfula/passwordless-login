import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import vm from '../main';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta: {
			requiresAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
