import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
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
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
