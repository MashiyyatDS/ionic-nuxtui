import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'LoginPage',
		component: () => import('@/views/login.vue'),
	},
	{
		path: '/',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: 'IndexPage',
				component: () => import('@/views/index.vue'),
			},
		],
	},
	{
		path: '/profile',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: 'Profile Page',
				component: () => import('@/views/profile.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
