import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes.js"

// import VueTouch from 'vue-touch'

// import "/src/assets/css/main.scss"

createApp(App)
  // .use(VueTouch, { name: 'v-touch' })
  .use(router)
  .mount("#app")
