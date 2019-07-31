import Vue from 'vue';
import ConfirmVue from './main.vue';

let confirmInstance = null;

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
  return Object.assign({ cancelText: '取消', confirmText: '确认', useConfirm: true }, props);
};
/**
 * 获取实例
 */
const getConfirmInstance = props => {
  confirmInstance = confirmInstance || newInstance(props);
  confirmInstance.show();
  return confirmInstance;
};

const newInstance = (props = {}) => {
  const ConfirmConstructor = Vue.extend(ConfirmVue);
  const instance = new ConfirmConstructor();
  const newProps = mergeProps(props);
  instance.message = newProps.message;
  instance.title = newProps.title;
  instance.cancelText = newProps.cancelText;
  instance.confirmText = newProps.confirmText;
  instance.useConfirm = newProps.useConfirm;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  window.addEventListener('hashchange', instance.hide);
  return instance;
};
ConfirmVue.show = (props = {}) => {
  return new Promise((resolve, reject) => {
    const newConfirmInstance = getConfirmInstance(props);
    newConfirmInstance.$on('confirm', res => resolve(res));
    newConfirmInstance.$on('cancel', res => reject(res));
  });
};

export default ConfirmVue;
