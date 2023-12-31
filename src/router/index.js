import { createRouter, createWebHistory } from 'vue-router'
import NoctaVista from '../views/NoctaVista.vue'
import NoctaWayfind from '../views/NoctaWayfind.vue'
import NoctaAbout from '../views/NoctaAbout.vue'
import NoctaMeta from '../views/NoctaMeta.vue'
import NoctaSplash from '../views/NoctaSplash.vue'
import NoctaLighthouse from '../views/NoctaLighthouse.vue'
import NoctaTest from '../views/NoctaTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", // default path
      name: "noctavista",
      component: NoctaVista,
      meta: {
        slogan: 'yes'
      }
    },
    {
      path: "/wayfind",
      name: "wayfind",
      component: NoctaWayfind,
      meta: {
        slogan: 'yes'
      }
    },
    {
      path: "/about",
      name: "about",
      component: NoctaAbout,
      meta: {
        slogan: 'no'
      }
    },
    {
      path: "/lighthouse",
      name: "lighthouse",
      component: NoctaLighthouse,
      meta: {
        slogan: 'no'
      }
    },
    {
      path: "/meta",
      name: "meta",
      component: NoctaMeta,
      meta: {
        slogan: 'no'
      }
    },
    {
      path: "/splash",
      name: "splash",
      component: NoctaSplash,
      meta: {
        slogan: 'no'
      }
    },
    {
      path: "/test",
      name: "test",
      component: NoctaTest,
      meta: {
        slogan: 'yes'
      }
    }
  ]
})

export default router
