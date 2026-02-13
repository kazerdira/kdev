import './assets/styles.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import BlogPost from './views/BlogPost.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', name: 'BlogPost', component: BlogPost },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
