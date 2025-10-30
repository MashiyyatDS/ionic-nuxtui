<template>
	<UCard
		:class="`${open ? 'absolute' : 'hidden'} rounded-none w-screen h-screen z-1 top-0`"
		:ui="{
			header: 'flex justify-between gap-3 border-b border-default',
			body: 'sm:p-0 p-0',
		}">
		<template #header>
			<UButton
				class="self-center rounded-full"
				@click="closeDialog"
				icon="material-symbols:arrow-back-rounded"
				variant="ghost" />

			<span class="self-center font-semibold"> {{ user?.name }}</span>
		</template>

		<template #default>
			<UCard
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
							<span class="text-bold text-primary">{{ user?.name }}</span>
							<span class="text-xs text-dimmed">{{ user?.email }}</span>
						</div>
					</div>

					<UIcon
						:name="
							user?.verified
								? 'material-symbols-light:verified'
								: 'material-symbols-light:verified-off-rounded'
						"
						:class="[
							'text-[25px] self-center',
							user?.verified ? 'text-primary' : 'text-dimmed',
						]" />
				</template>

				<template #default>
					<div class="flex justify-between">
						<span class="text-sm">Contact</span>
						<span class="text-sm text-dimmed">{{ user?.contact }}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-sm font-bold">Address</span>
						<span class="text-sm text-dimmed">{{ user?.address }}</span>
					</div>
				</template>
			</UCard>
		</template>
	</UCard>
</template>

<script setup lang="ts">
import type { User } from '@/types'

const open = defineModel('open', { default: false })
const user = defineModel<User | undefined>('user', { required: true })

const closeDialog = () => {
	open.value = false
	user.value = undefined
}

defineShortcuts({
	escape: () => (open.value = false),
})
</script>
