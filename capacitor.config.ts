import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'md.project.00001',
	appName: 'md-project',
	webDir: 'dist',
	android: {
		adjustMarginsForEdgeToEdge: 'auto',
	},
	plugins: {
		Keyboard: {
			/**
			 * Use the 'ionic' resize mode so the webview/content is resized when the keyboard opens.
			 * Alternatives: 'native', 'body', 'none' depending on desired behavior.
			 */
			resize: 'ionic',
		},
	},
}

export default config
