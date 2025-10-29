import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import '@/assets/css/main.css'
import robustValidator from './plugins/robust-validator'

const app = createApp(App)
app.use(robustValidator)
app.use(router)
app.use(ui)
app.mount('#app')
