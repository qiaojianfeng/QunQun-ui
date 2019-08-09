import Vue from 'vue';
import ToastVue from './main.vue';

const BASE_DATA = ToastVue.data();
let notifyInstance = null;
let timer = null;

/**
 * 合并参数
 * @param {*原型链方法传入参数} props
 */
const mergeProps = props => {
  if (typeof props === 'string') {
    props = {
      message: props
    };
  }
  return Object.assign({ duration: BASE_DATA.duration }, props);
};
/**
 * 获取实例
 */
const getToastInstance = props => {
  const newProps = mergeProps(props);
  notifyInstance && (notifyInstance.isBind = true);
  notifyInstance = notifyInstance || newInstance(newProps);
  notifyInstance.show();
  // duration > 0 => Auto Close
  if (newProps.duration !== 0) {
    if (!timer) {
      timer = setTimeout(() => {
        notifyInstance.hide();
        timer = null;
      }, newProps.duration);
    }
  }
  return notifyInstance;
};

const newInstance = (props = {}) => {
  const ToastConstructor = Vue.extend(ToastVue);
  const instance = new ToastConstructor();
  instance.message = props.message;
  instance.duration = props.duration;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  window.addEventListener('hashchange', instance.hide);
  return instance;
};
ToastVue.show = (props = {}) => {
  return new Promise(resolve => {
    const newToastInstance = getToastInstance(props);
    if (!notifyInstance.isBind) {
      newToastInstance.$on('onHide', res => resolve(res));
    }
  });
};

export default ToastVue;
