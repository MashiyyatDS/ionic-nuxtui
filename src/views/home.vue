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
			<UserCard :user="user" @user-selected="selectUser(user)" />
		</div>

		<UserDialog v-model:user="selectedUser" v-model:open="open" />
	</div>
</template>

<script setup lang="ts">
import type { User } from '@/types'

const loading = ref(true)
const users = ref<User[]>([])
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

const open = ref(false)
const selectedUser = ref<User | undefined>()
const selectUser = (user: User) => {
	selectedUser.value = user
	open.value = true
}

onMounted(() => getUsers())
</script>
