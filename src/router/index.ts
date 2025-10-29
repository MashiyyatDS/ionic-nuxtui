import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const modules = ['profile', 'messages', 'notifications', 'orders', 'cart']
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login-page',
		component: () => import('@/views/login.vue'),
	},

	{
		path: '/',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: `index-page`,
				component: () => import('@/views/index.vue'),
			},
		],
	},
	...modules.map((module) => ({
		path: `/${module}`,
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			{
				path: '',
				name: `${module}-page`,
				component: () => import(`@/views/${module}.vue`),
			},
		],
	})),
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
