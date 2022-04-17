import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import AosVue from "aos-vue";

const app = createApp(App)


app.use(createPinia())
app.use(AosVue)
app.mount('#app')