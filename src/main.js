import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueClickOutsideElement from 'vue-click-outside-element'

createApp(App).use(router).use(vueClickOutsideElement).mount('#app')
