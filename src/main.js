import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Topic from './components/Topic.vue'
import TplWord from './components/TplWord.vue'
import Leo from './components/Leo.vue'


let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: 'topic',
    component: Topic
  },
  {
    path: '/tplword',
    name: 'tplword',
    component: TplWord
  },
  {
    path: '/leo',
    name: 'leo',
    component: Leo
  },
]

let VueRouter = createRouter({history,routes})

const app = createApp(App)
app.use(VueRouter)
app.config.devtools = true
console.log(app.config.devtools);
app.mount('#app')

