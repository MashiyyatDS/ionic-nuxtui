<template>
	<UDashboardGroup>
		<UDashboardSidebar :ui="{ body: 'sm:p-1 p-1' }" title="Application Name" mode="drawer">
			<template #header>
				<span>Application Name</span>
			</template>
			<template #default>
				<UNavigationMenu orientation="vertical" :items="items" />
			</template>

			<template #footer>
				<UButton label="Logout" block />
			</template>
		</UDashboardSidebar>

		<UDashboardPanel :ui="{ body: 'sm:p-0 p-0' }">
			<template #header>
				<UDashboardNavbar title="Application Name">
					<template #leading>
						<UDashboardSidebarCollapse />
					</template>
				</UDashboardNavbar>
			</template>

			<template #body>
				<div class="p-1">
					<UNavigationMenu
						:items="tabItems"
						class="flex justify-center"
						highlight-color="primary" />
				</div>

				<div class="p-2">
					<RouterView />
				</div>
			</template>
		</UDashboardPanel>
	</UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
	[
		{
			label: 'Dashboard',
			icon: 'mdi-home',
			to: '/',
		},
		{
			label: 'Profile',
			description: 'Fully styled and customizable components for Nuxt.',
			icon: 'mdi-account',
			to: '/profile',
		},
		{
			label: 'Orders',
			icon: 'i-lucide-book-open',
			children: [
				{
					label: 'Introduction',
					description: 'Fully styled and customizable components for Nuxt.',
					icon: 'i-lucide-house',
				},
			],
		},
	],
	[
		{
			label: 'GitHub',
			icon: 'i-simple-icons-github',
			badge: '3.8k',
			to: 'https://github.com/nuxt/ui',
			target: '_blank',
		},
		{
			label: 'Help',
			icon: 'i-lucide-circle-help',
			disabled: true,
		},
	],
])

const tabItems = ref([
	{
		icon: 'material-symbols:fastfood',
		to: '/',
	},
	{
		icon: 'material-symbols:account-circle',
		to: '/profile',
	},
	{
		icon: 'material-symbols:notifications',
		to: 'https://github.com/nuxt/ui',
	},
	{
		icon: 'material-symbols:shopping-cart',
		to: 'https://github.com/nuxt/ui',
	},
])
</script>
