import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import '@/assets/css/main.css'

const app = createApp(App)

console.log(import.meta.env.VITE_APP_ENV)

app.use(router)
app.use(ui)

app.mount('#app')
//router.isReady().then(() => {
//	app.mount('#app')
//})
