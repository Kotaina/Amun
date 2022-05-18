import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import themeHandler from './themeHandler'

createApp(App)
    .use(store)
    // .mixin(themeHandler)
    .mount('#app')
