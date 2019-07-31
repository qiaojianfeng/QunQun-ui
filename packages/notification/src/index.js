import Vue from 'vue';
import NotifyVue from './main.vue';

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
  return Object.assign({ duration: 2500 }, props);
};
/**
 * 获取实例
 */
const getNotifyInstance = props => {
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
  const NotifyConstructor = Vue.extend(NotifyVue);
  const instance = new NotifyConstructor();
  instance.message = props.message;
  instance.duration = props.duration;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  window.addEventListener('hashchange', instance.hide);
  return instance;
};
NotifyVue.show = (props = {}) => {
  return new Promise(resolve => {
    const newNotifyInstance = getNotifyInstance(props);
    if (!notifyInstance.isBind) {
      newNotifyInstance.$on('onHide', res => resolve(res));
    }
  });
};

export default NotifyVue;
