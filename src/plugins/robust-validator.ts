import { App } from 'vue'

export default {
	install(app: App) {
		app.config.globalProperties.$robustValidator = {
			testFunction() {
				console.log('Robust Validator Working...')
			},
		}
	},
}
