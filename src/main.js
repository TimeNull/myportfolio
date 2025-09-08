import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import './css/style.css'
import './css/animations.css'

createApp(App).use(router).mount('#app')

