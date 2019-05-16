import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  //base: "/",
  routes: [
    {
      path: '/',
      name: 'airTicket',
      meta: { requireAuth: true },
      component: () => import('@/views/airTickets.vue')
    },
  ]
});

export default router;
