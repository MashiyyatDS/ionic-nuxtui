<template>
	<div class="messages-container">
		<div class="h-full flex flex-col p-3 gap-3">
			<UPageHeader
				description="A responsive page header with title, description and actions."
				:links="links">
				<template #title>
					<UAvatar
						class="mr-3"
						size="xl-[5px]"
						src="https://media.licdn.com/dms/image/v2/D5603AQELfgzipMJ8cQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732012492768?e=1763596800&v=beta&t=mNwlbNn4yNVF_Y5PM9_ujvINLpicAIVswyfzVye8Ojw" />
					<span>Mashiyyat D.S.</span>
				</template>
			</UPageHeader>

			<UButton label="Settings" class="self-end" @click="drawer = !drawer" />
		</div>

		<UDrawer direction="bottom" v-model:open="drawer" title="Settings">
			<template #description />
			<template #content>
				<UNavigationMenu orientation="vertical" :items="items" />
			</template>
		</UDrawer>
	</div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
	[
		{
			label: 'Settings',
			type: 'label',
		},
		{
			label: 'Orders',
			icon: 'material-symbols:fastfood',
		},
		{
			label: 'Payment Setting',
			icon: 'ic:baseline-payment',
		},
	],
	[
		{
			label: 'Account Settings',
			icon: 'material-symbols:settings',
			children: [
				{
					label: 'Personal Information',
					icon: 'material-symbols:info',
				},
				{
					label: 'Account Security',
					icon: 'material-symbols:lock',
				},
			],
		},
	],
	[
		{
			label: 'Help',
			icon: 'material-symbols:help-rounded',
		},
		{
			label: 'Logout',
			icon: 'bx:exit',
			to: '/',
		},
	],
])

const links = ref([
	{
		label: 'Edit this page',
		icon: 'i-lucide-file-pen',
		to: 'https://github.com/nuxt/ui/blob/v4/docs/content/3.components/page-links.md',
	},
	{
		label: 'Star on GitHub',
		icon: 'i-lucide-star',
		to: 'https://github.com/nuxt/ui',
	},
	{
		label: 'Releases',
		icon: 'i-lucide-rocket',
		to: 'https://github.com/nuxt/ui/releases',
	},
])

const drawer = ref(false)
</script>
