import Vue from 'vue';
import toastVue from './main.vue';

const ToastConstructor = Vue.extend(toastVue);

let instance = null;
let seed = 1;

let myToast = options => {
  let message = typeof options === 'string' ? options : options.message; // 初始化需要显示文本 因为支持直传文本
  let autoClose = options.autoClose === undefined ? true : options.autoClose; // 初始化显示时间
  let duration = options.duration || 2000; // 初始化显示时间 默认是2000
  let callBack = options.callBack; // 关闭回调
  let style = options.style || 'A'; // toast 样式 A：保留之前正方形样式 B：长方形样式

  let id = 'toast_' + seed++;
  instance = new ToastConstructor();
  instance.id = id;
  instance.vm = instance.$mount(); // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el); // 通过原生的DOM API,append挂载到

  instance.timeout = 0;
  instance.message = message;
  instance.duration = duration;
  instance.autoClose = autoClose;
  instance.style = style;
  if (autoClose) {
    Vue.nextTick(() => {
      instance.timeout = setTimeout(function() {
        callBack();
        instance.hide();
      }, duration);
    });
  }
  instance.show();
};

export default myToast;
