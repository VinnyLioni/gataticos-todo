import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import todoPage from "../pages/todoPage.vue";
import finishedLists from "../pages/finishedLists.vue";
import categoryPage from "../pages/categoryPage.vue";
import archiveList from "../pages/archiveList.vue";

const routes = [
    {
        path: '/',
        name: 'home', 
        component: HomePage,
        children: [
            {
                path: '/listas',
                name: 'todo',
                component: todoPage,
            },
            {
                path: '/concluidas',
                name: 'finished',
                component: finishedLists,
            },
            {
                path: '/categorias',
                name: 'category',
                component: categoryPage,
            },
            {
                path: '/arquivadas',
                name: 'archive',
                component: archiveList,
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router