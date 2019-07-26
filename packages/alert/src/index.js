import Vue from 'vue';
import AlertVue from './main.vue';

const AlertConstructor = Vue.extend(AlertVue);
const TYPE_LIST = ['info', 'warn', 'error', 'ok'];

let instance = null;
let seed = 1;
let myAlert = (options = '') => {
  // 初始化需要显示文本 因为支持直传文本
  const message = typeof options === 'string' ? options : options.message;
  const title = options.title;
  let type = options.type || 'info';
  let id = 'alert_' + seed++;
  if (!TYPE_LIST.includes(type)) {
    type = 'info';
    console.warn('Alert 类型必须为以下四种之一:info、warn、error、ok');
    return;
  }
  instance = new AlertConstructor();
  instance.id = id;
  instance.vm = instance.$mount(); // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el); // 通过原生的DOM API,append挂载到
  instance.type = type;
  instance.message = message;
  instance.title = title;
  instance.show();
  window.addEventListener('hashchange', instance.hide);
};

export default myAlert;
