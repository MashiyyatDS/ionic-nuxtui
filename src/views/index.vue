<template>
	<div class="grid grid-cols-12 gap-2">
		<TransitionGroup name="list">
			<div class="col-span-12" v-for="(user, key) in users" :key="key">
				<UCard
					:ui="{
						header: 'sm:p-2 p-2 flex gap-2',
						body: 'sm:p-2 p-2',
						footer: 'sm:p-2 p-2',
					}">
					<template #header>
						<UAvatar
							class="self-center"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhCJ4xNURzbEMW0v6DR5liYUJ96PkQGB9PSfL3gWBvziLDLZjVwkcXFz96-7zFEZR5uw&usqp=CAU" />
						<div class="flex flex-col">
							<span class="text-bold text-primary">{{ user.name }}</span>
							<span class="text-xs text-dimmed">{{ user.email }}</span>
						</div>
					</template>

					<template #default>
						<span class="text-sm">
							<pre>{{ user }}</pre>
						</span>
					</template>

					<template #footer>
						<UButton
							:disabled="!user.verified"
							:label="user.verified ? `View ${user.name}` : 'Unverified'"
							:color="user.verified ? 'primary' : 'secondary'" />
					</template>
				</UCard>
			</div>
		</TransitionGroup>
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
const getUsers = async () => {
	const responseJson = await fetch('https://retoolapi.dev/Xb77XU/data')

	const response = await responseJson.json()

	users.value = response
}

onMounted(() => getUsers())
</script>

<style>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
