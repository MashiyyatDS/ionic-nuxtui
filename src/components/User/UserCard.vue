<template>
	<UCard
		@click="$emit('user-selected', user)"
		class="bg-neutral-800 rounded-none"
		:ui="{
			header: 'sm:p-2 p-2 flex justify-between',
			body: 'sm:p-2 p-2',
		}">
		<template #header>
			<div class="flex gap-2">
				<UAvatar
					class="self-center"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhCJ4xNURzbEMW0v6DR5liYUJ96PkQGB9PSfL3gWBvziLDLZjVwkcXFz96-7zFEZR5uw&usqp=CAU" />
				<div class="flex flex-col">
					<span class="text-bold text-primary">{{ user.name }}</span>
					<span class="text-xs text-dimmed">{{ user.email }}</span>
				</div>
			</div>

			<UIcon
				:name="
					user.verified
						? 'material-symbols-light:verified'
						: 'material-symbols-light:verified-off-rounded'
				"
				:class="[
					'text-[25px] self-center',
					user.verified ? 'text-primary' : 'text-dimmed',
				]" />
		</template>

		<template #default>
			<div class="flex justify-between">
				<span class="text-sm">Contact</span>
				<span class="text-sm text-dimmed">{{ user.contact }}</span>
			</div>
			<div class="flex justify-between">
				<span class="text-sm font-bold">Address</span>
				<span class="text-sm text-dimmed">{{ user.address }}</span>
			</div>
		</template>
	</UCard>
</template>

<script setup lang="ts">
import type { User } from '@/types'

defineEmits<{
	(e: 'user-selected', user: User): void
}>()

const user = defineModel<User>('user', { required: true })
</script>
