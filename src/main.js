import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueClickOutsideElement from 'vue-click-outside-element'
import {Plugin} from "vue-responsive-video-background-player";

createApp(App).use(router).use(vueClickOutsideElement).use(Plugin).mount('#app')
