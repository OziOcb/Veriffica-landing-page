import App from './App.vue'
import { createPinia } from 'pinia'
import AosVue from "aos-vue";
import { ViteSSG } from 'vite-ssg'

const routes = [
  { path: '/', component: App },
]
// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app }) => {
    // install plugins etc.
    app.use(createPinia())
    app.use(AosVue)
  },
)
