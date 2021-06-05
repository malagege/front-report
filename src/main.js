import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.devtools = true
console.log(app.config.devtools);
app.mount('#app')

