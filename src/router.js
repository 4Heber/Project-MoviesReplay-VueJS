import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('./views/Home.vue') },
    { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
    { path: '/register', name: 'register', component: () => import('./views/Register.vue') },
    { path: '/perfil', name: 'perfil', component: () => import('./views/Perfil.vue') },
    { path: '/review/:movie_id', name: 'review', component: () => import('./views/ReviewShow.vue') },
    { path: '/publicar-review', name: 'publish', component: () => import('./views/PublishReview.vue') },
    { path: '/explorar', name: 'explore', component: () => import('./views/Explore.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
