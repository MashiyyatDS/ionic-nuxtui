<template>
	<UCard
		:class="`${open ? 'absolute' : 'hidden'} rounded-none w-screen h-screen`"
		:ui="{ header: 'flex gap-3 border-b border-default' }">
		<template #header>
			<UButton
				class="self-center rounded-full"
				@click="open = !open"
				icon="material-symbols:arrow-back-rounded"
				variant="ghost" />

			<span class="self-center font-semibold">Search</span>
		</template>

		<template #default>
			<UFormField>
				<UInput
					icon="mdi-search"
					placeholder="Search"
					class="w-full rounded-full"
					size="lg" />
			</UFormField>
		</template>
	</UCard>
</template>

<script setup lang="ts">
const open = defineModel('open', { default: false })

defineShortcuts({
	escape: () => (open.value = false),
})
</script>
