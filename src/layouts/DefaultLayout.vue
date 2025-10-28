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

		<UDashboardPanel :ui="{ body: 'sm:p-2 p-2' }">
			<template #header>
				<UDashboardNavbar title="Dashboard">
					<template #leading>
						<UDashboardSidebarCollapse />
					</template>
				</UDashboardNavbar>
			</template>

			<template #body>
				<RouterView />
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
</script>
