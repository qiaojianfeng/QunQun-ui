import Vue from 'vue';
import App from './App.vue';
import QunQunUi from '../packages/index';

Vue.config.productionTip = false;
Vue.use(QunQunUi);

new Vue({
  render: h => h(App)
}).$mount('#app');
