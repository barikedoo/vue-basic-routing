import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior doesn't work if target component wrapped in <transition>
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash };

      // Alternatively
      // return {x:0, y: 800}
    }
  }
});

// Метод вызывается каждый раз перед каждым переход по любому роуту
router.beforeEach((to, from, next)=> {
  console.log('global beforeEach');
  // обязательно вызывается метод ниже для продолжения навигации
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
