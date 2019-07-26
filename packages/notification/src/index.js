import Vue from 'vue';
import notifyVue from './main.vue';

const NotifyConstructor = Vue.extend(notifyVue);

let instance = null;
let seed = 1;

let myNotify = options => {
  let message = typeof options === 'string' ? options : options.message; // 初始化需要显示文本 因为支持直传文本
  let autoClose = options.autoClose === undefined ? true : options.autoClose;
  let duration = options.duration || 2500; // 初始化显示时间 默认是2500

  let id = 'notify_' + seed++;
  instance = new NotifyConstructor();
  instance.id = id;
  instance.vm = instance.$mount(); // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el); // 通过原生的DOM API,append挂载到

  instance.timeout = 0;
  instance.message = message;
  instance.duration = duration;
  instance.autoClose = autoClose;

  if (autoClose) {
    Vue.nextTick(() => {
      instance.timeout = setTimeout(function() {
        instance.hide();
      }, duration);
    });
  }
  instance.show();
};

export default myNotify;
