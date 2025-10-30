<template>
	<UCard v-if="user" class="top-0 absolute h-full z-1" :ui="{ body: 'sm:p-0 p-0 h-full' }">
		<div class="message">
			<div class="message-header border-b border-default flex justify-between gap-3 px-3">
				<div class="flex gap-2">
					<UButton
						class="self-center rounded-full"
						@click="closeDialog"
						icon="material-symbols:arrow-back-rounded"
						variant="ghost" />

					<UUser
						:ui="{
							name: `text-semi-bold text-[13px]`,
						}"
						:name="user.name"
						:avatar="user.avatar"
						size="xl"
						class="relative" />
				</div>

				<div class="flex gap-2">
					<UButton
						variant="ghost"
						icon="material-symbols:call"
						class="rounded-full self-center" />

					<UButton
						variant="ghost"
						icon="material-symbols:videocam-rounded"
						class="rounded-full self-center" />
				</div>
			</div>

			<div class="message-body p-1">
				<UChatMessages :messages="messages" />
			</div>

			<div class="message-actions border-t border-default flex flex-col justify-center p-3">
				<UInput
					placeholder="Enter message here..."
					class="rounded"
					icon="mdi-edit"
					@keypress.enter="sendMessage">
					<template #trailing>
						<UButton icon="mdi-send" variant="ghost" size="sm" />
					</template>
				</UInput>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
interface User {
	name: string
	description: string
	to: string
	avatar: { src: string; alt: string }
	marked_as_read?: boolean
}
const open = defineModel('open', { default: false })
const user = defineModel<User | undefined>('user', { required: true })

const closeDialog = () => {
	open.value = false
	user.value = undefined
}

const messages = ref([
	{
		id: '6045235a-a435-46b8-989d-2df38ca2eb47',
		role: 'user',
		parts: [
			{
				type: 'text',
				text: 'Hello, how are you?',
			},
		],
	},
	{
		id: '7a92b3c1-d5f8-4e76-b8a9-3c1e5fb2e0d8',
		role: '',
		parts: [
			{
				type: 'text',
				text: 'I am doing well, thank you for asking! How can I assist you today?',
			},
		],
	},
	{
		id: '9c84d6a7-8b23-4f12-a1d5-e7f3b9c05e2a',
		role: 'user',
		parts: [
			{
				type: 'text',
				text: 'What is the current weather in Tokyo?',
			},
		],
	},
	{
		id: 'b2e5f8c3-a1d9-4e67-b3f2-c9d8e7a6b5f4',
		role: 'assistant',
		parts: [
			{
				type: 'text',
				text: "Based on the latest data, Tokyo is currently experiencing sunny weather with temperatures around 24°C (75°F). It's a beautiful day with clear skies.",
			},
		],
	},
])

const sendMessage = () =>
	messages.value.push({
		id: '6045235a-a435-46b8-989d-2df38ca2eb47',
		role: 'user',
		parts: [
			{
				type: 'text',
				text: 'What is the current weather in Tokyo?',
			},
		],
	})

defineShortcuts({
	escape: () => (open.value = false),
})
</script>

<style scoped lang="scss">
.message {
	display: flex;
	flex-direction: column;
	height: 100%;
	min-height: 0;

	&-header {
		height: 70px;
		flex: 0 0 70px;
	}

	&-actions {
		height: 50px;
		flex: 0 0 50px;
	}

	&-body {
		flex: 1 1 auto;
		min-height: 0;
		overflow: auto;
		height: calc(100% - 120px);
	}
}
</style>
