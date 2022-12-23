import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import ViewUI from 'view-design';
import VueClipboard from 'vue-clipboard2'
import svgIcon from '@/components/svgIcon/index.js';
import 'view-design/dist/styles/iview.css';
import '@/assets/fonts/font.css';

if (process.env.NODE_ENV !== "production") {
  window.utools = window.utools || utools;
}

Vue.prototype.utools = window.utools;

Vue.use(ViewUI);
Vue.use(VueClipboard)
Vue.use(svgIcon);

Vue.prototype.$http = axios
Vue.config.productionTip = false;

window.utools.onPluginReady(() => {

  console.log("插件装配完成，已准备好");

  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');

});
