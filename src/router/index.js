import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/artist',
    name: 'artist',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArtistView.vue')
  },
  {
    path: '/program-oversigt',
    name: 'program-oversigt',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramOversigt.vue')
  },
  {
    path: '/program-oversigt-mobil',
    name: 'program-oversigt-mobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramOversigtMobil.vue')
  },
  {
    path: '/billet-typer',
    name: 'billet-typer',
    component: () => import(/* webpackChunkName: "about" */ '../views/BilletTyper.vue')
  },
  {
    path: '/festival-info',
    name: 'festival-info',
    component: () => import(/* webpackChunkName: "about" */ '../views/FestivalInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
