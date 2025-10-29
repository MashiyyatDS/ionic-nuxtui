<template>
	<UApp>
		<RouterView v-slot="{ Component }">
			<Transition name="fade" mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</UApp>
</template>

<script setup lang="ts"></script>

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
