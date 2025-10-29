<template>
	<div class="messages-container h-full">
		<div class="p-2 border-b border-default">
			<span class="font-semibold">Messages</span>
		</div>

		<UPageList>
			<UPageCard
				@click="selectedUser = user"
				v-for="(user, index) in users"
				:key="index"
				variant="ghost"
				:to="user.to"
				:ui="{ container: 'sm:p-3 p-3', root: 'rounded-none mb-1' }">
				<template #body>
					<UUser
						:ui="{ name: 'text-semibold text-[13px]' }"
						:name="user.name"
						chip
						description="This is a latest message that you should...."
						:avatar="user.avatar"
						size="xl"
						class="relative" />
				</template>
			</UPageCard>
		</UPageList>
	</div>
</template>

<script setup lang="ts">
interface User {
	name: string
	description: string
	to: string
	avatar: { src: string; alt: string }
}

const selectedUser = ref<User | undefined>()
const users = ref([
	{
		name: 'Mashiyyat Delos Santos',
		description: 'delossantos.mash@gmail.com',
		to: '/messages?contact_id=00000',
		avatar: {
			src: 'https://media.licdn.com/dms/image/v2/D5603AQELfgzipMJ8cQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732012492768?e=1763596800&v=beta&t=mNwlbNn4yNVF_Y5PM9_ujvINLpicAIVswyfzVye8Ojw',
			alt: 'benjamincanac',
		},
	},
	{
		name: 'Merry Grace Managuit',
		description: 'merrygrace.managuit@gmail.com',
		to: '/messages?contact_id=00000',
		avatar: {
			src: 'https://media.licdn.com/dms/image/v2/D4E03AQG--1aKKQH_KA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668847328154?e=1763596800&v=beta&t=tSIFsEWUScnCHMJFBI_P2o61q6349dlWIgi0Vs9vGnQ',
			alt: 'benjamincanac',
		},
	},
	{
		name: 'Ronel Carolino',
		description: 'bhoxz.ronel@gmail.com',
		to: '/messages?contact_id=00000',
		avatar: {
			src: 'https://media.licdn.com/dms/image/v2/D5603AQEqmcWPfKjrYQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720780823887?e=1763596800&v=beta&t=UpLbv_8Dh67vm2AEBwNkQzcAR2b8S9J4RLOtUEtxUsM',
			alt: 'benjamincanac',
		},
	},
	{
		name: 'Daniel Cansino',
		description: 'daniel.cansino@gmail.com',
		to: '/messages?contact_id=00000',
		avatar: {
			src: 'https://media.licdn.com/dms/image/v2/D5635AQEHp-SXD5-Hug/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1685427846457?e=1762329600&v=beta&t=rfK4h7LVE0gi_CGTMmccU18r5VRIyjNWQT8d1j4augI',
			alt: 'benjamincanac',
		},
	},
	{
		name: 'Benjamin Pena',
		description: 'benjamin.pena@gmail.com',
		to: '/messages?contact_id=00000',
		avatar: {
			src: 'https://media.licdn.com/dms/image/v2/D5603AQG6EAkF2NTqXw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1678273226978?e=1763596800&v=beta&t=vG0ywdDFJ6GY0BMuNwZ4DFbBhFRfXXu5cX9oTQrzJZo',
			alt: 'benjamincanac',
		},
	},
])
</script>
