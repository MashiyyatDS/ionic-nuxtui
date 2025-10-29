<template>
	<div class="grid grid-cols-12 gap-3 py-2">
		<template v-if="loading">
			<div class="col-span-12 p-2" v-for="loader in 6" :key="loader">
				<div class="flex items-center gap-4">
					<USkeleton class="h-12 w-12 rounded-full" />

					<div class="grid gap-2">
						<USkeleton class="h-4 w-[250px]" />
						<USkeleton class="h-4 w-[200px]" />
					</div>
				</div>
			</div>
		</template>

		<div class="col-span-12" v-for="(user, key) in users" :key="key">
			<UCard
				@click="console.log(user)"
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
		</div>
	</div>
</template>

<script setup lang="ts">
export interface User {
	id: number
	name: string
	email: string
	address: string
	contact: string
	verified: boolean
	registered_at: string
}

const users = ref<User[]>([])
const loading = ref(true)
const getUsers = async () => {
	try {
		const responseJson = await fetch('https://retoolapi.dev/Xb77XU/data')

		const response = await responseJson.json()

		users.value = response

		loading.value = false
	} catch {
		console.error('GetUsers: Something went wrong')
	}
}

onMounted(() => getUsers())
</script>
