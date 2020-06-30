import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresGuest: true,
    },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      requiresGuest: true,
    },
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true,
    },
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to login page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to login page
      next('/profile');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
