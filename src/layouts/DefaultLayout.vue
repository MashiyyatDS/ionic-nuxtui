<template>
	<UDashboardGroup>
		<UDashboardPanel :ui="{ body: 'sm:p-0 p-0 h-[100%] bg-neutral-900' }">
			<template #header>
				<div class="border-b border-default">
					<div class="flex gap-1 p-2">
						<ULink to="/profile">
							<UAvatar
								class="self-center"
								src="https://media.licdn.com/dms/image/v2/D5603AQELfgzipMJ8cQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732012492768?e=1763596800&v=beta&t=mNwlbNn4yNVF_Y5PM9_ujvINLpicAIVswyfzVye8Ojw" />
						</ULink>

						<UButton
							label="Search"
							icon="mdi-search"
							@click="open = !open"
							class="self-center w-full rounded-full"
							:ui="{ label: 'text-[12px]' }"
							variant="outline" />

						<UChip inset color="error" text="5">
							<UButton
								icon="material-symbols:notifications-rounded"
								variant="ghost"
								class="rounded-full self-center"
								size="md"
								to="/notifications" />
						</UChip>

						<UButton
							icon="solar:chat-round-dots-bold"
							variant="ghost"
							class="rounded-full self-center"
							size="md"
							to="/messages" />
					</div>
				</div>
			</template>

			<template #body>
				<router-view v-slot="{ Component }">
					<Transition name="fade" mode="out-in">
						<component :is="Component" />
					</Transition>
				</router-view>
			</template>

			<template #footer>
				<div class="border-t border-default">
					<UNavigationMenu
						:items="tabItems"
						class="flex justify-center w-full"
						highlight-color="primary">
						<template #item="{ item }">
							<div class="flex flex-col justify-center">
								<UIcon :name="item.icon" class="text-lg self-center" />

								<span class="self-center text-[11px]">{{ item.label }}</span>
							</div>
						</template>
					</UNavigationMenu>
				</div>
			</template>
		</UDashboardPanel>

		<SearchDialog v-model:open="open" />
	</UDashboardGroup>
</template>

<script setup lang="ts">
const tabItems = ref([
	{
		icon: 'material-symbols-light:house-rounded',
		to: '/home',
		label: 'Home',
	},
	{
		icon: 'material-symbols:fastfood',
		to: '/orders',
		label: 'Orders',
	},
	{
		icon: 'material-symbols:shopping-cart',
		to: '/cart',
		label: 'Cart',
	},
])

const open = ref(false)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
