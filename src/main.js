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
Vue.prototype.$pluginDetach = false;

window.utools.onPluginEnter(({code, type, payload}) => {

  console.log('用户进入插件应用', code, type, payload)

  Vue.prototype.$pluginCode = code
  Vue.prototype.$pluginType = type
  Vue.prototype.$pluginPayload = payload

  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');

});

window.utools.onPluginDetach(() => {
  console.log('分离插件')
  Vue.prototype.$pluginDetach = true
})
