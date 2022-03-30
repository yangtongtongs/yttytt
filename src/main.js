import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myplugin from './plugins/myplugin.js'
import './style/index.css' //全局样式
Vue.use(myplugin)
Vue.use(ElementUI);
Vue.config.productionTip = false;
if (process.env.NODE_ENV == "development") {
    require('./mock/index')
}
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");