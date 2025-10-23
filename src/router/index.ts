import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/portafolio',
    children: [
      {
        path: 'portafolio',
        name: 'portafolio',
        component: () => import('../views/Home.vue' as any),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
