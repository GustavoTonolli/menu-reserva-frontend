import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import 'vuetify/styles'
import vuetify from './plugins/vuetify.js'
import { store, key } from './store'

import router from './router'

createApp(App).use(router).use(store, key).use(vuetify).mount('#app')
