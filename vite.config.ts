/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import ui from '@nuxt/ui/vite'

export default defineConfig({
	plugins: [
		vue(),
		ui({
			autoImport: {
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
					/\.vue\.[tj]sx?\?vue/,
				],
				imports: ['vue', 'vue-router', 'vue-router'],
				dirs: [
					'./types',
					'./composables/**', // all nested modules
				],
				dts: './auto-imports.d.ts',
				vueTemplate: true,
				vueDirectives: true,
			},
			ui: {
				colors: {
					primary: 'blue',
					secondary: 'purple',
					neutral: 'zinc',
				},
				theme: {
					colors: [
						'red',
						'orange',
						'amber',
						'yellow',
						'lime',
						'green',
						'emerald',
						'teal',
						'cyan',
						'sky',
						'blue',
						'indigo',
						'violet',
						'purple',
						'fuchsia',
						'pink',
						'rose',
					],
				},
			},
			colorMode: true,
		}),
		legacy(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
})
