import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router'
import "./assets/fontawesome/all.js";
import { useAuthStore } from './store/authStore.js'

const pinia = createPinia()
const app = createApp(App)

router.beforeEach((to) => {
    const authStore = useAuthStore()

    const authenticated = authStore.uid ? true : false

    if (authenticated && to.name === 'login') {
        return { name: 'home'}
    }  
    if (!authenticated && to.name !== 'login') {
        return { name: 'login'}
    }
})


app.use(router)
app.use(pinia)
app.mount('#app')
