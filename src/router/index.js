import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/index.html',
		name: 'Home',
		component: Home,
	},
	{
		path: '/camera',
		name: 'Camerea',
		component: () => import('@/views/Camera.vue'),
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: () => import('@/views/Contacts.vue'),
	},
	{
		path: '/device',
		name: 'DeviceCordova',
		component: () => import('@/views/DeviceCordova.vue'),
	},
	{
		path: '/file',
		name: 'FileTest',
		component: () => import('@/views/FileTest.vue'),
	},
	{
		path: '/push',
		name: 'PushTest',
		component: () => import('@/views/PushTest.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
