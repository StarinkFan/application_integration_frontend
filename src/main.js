import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import { post, fetch }  from "./config/axios";
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;
// import { getToken } from "./util/token";

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   //权限检查，没有登录跳转登录界面
//   if (to.meta.requireAuth && !getToken()) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");