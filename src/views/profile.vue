<template>
	<div class="messages-container">
		<div class="p-2 border-b border-default">
			<span class="font-semibold">Profile</span>
		</div>

		<div class="h-full flex flex-col gap-3 p-3">
			<UEmpty
				icon="material-symbols:fastfood"
				title="No items found"
				description="It looks like you haven't any items inside your cart." />

			<UButton label="Settings" class="self-center" @click="drawer = !drawer" />
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

const drawer = ref(false)
</script>
