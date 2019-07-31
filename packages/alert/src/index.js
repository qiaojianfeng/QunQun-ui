import Vue from 'vue';
import AlertVue from './main.vue';

const TYPE_LIST = ['info', 'warn', 'error', 'ok'];

let alertInstance = null;
/**
 * 合并参数
 * @param {*原型链方法传入参数} props
 */
const mergeProps = props => {
  if (typeof props === 'string') {
    props = {
      message: props,
      type: 'info'
    };
  }
  if (!TYPE_LIST.includes(props.type)) {
    console.warn('Alert 类型必须为以下四种之一:info、warn、error、ok');
  }
  return Object.assign({}, props);
};
/**
 * 获取实例
 */
const getAlertInstance = props => {
  alertInstance = alertInstance || newInstance(props);
  alertInstance.type = props.type;
  alertInstance.message = props.message;
  alertInstance.show();
  return alertInstance;
};

const newInstance = (props = {}) => {
  const newProps = mergeProps(props);
  const AlertConstructor = Vue.extend(AlertVue);
  const instance = new AlertConstructor();
  instance.type = newProps.type;
  instance.message = newProps.message;
  instance.title = newProps.title;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  window.addEventListener('hashchange', instance.hide);
  return instance;
};
AlertVue.show = (props = {}) => {
  return getAlertInstance(props);
};
AlertVue.info = (props = {}) => {
  let newProps = mergeProps(props);
  newProps.type = 'info';
  return getAlertInstance(newProps);
};
AlertVue.warn = (props = {}) => {
  let newProps = mergeProps(props);
  newProps.type = 'warn';
  return getAlertInstance(newProps);
};
AlertVue.error = (props = {}) => {
  let newProps = mergeProps(props);
  newProps.type = 'error';
  return getAlertInstance(newProps);
};
AlertVue.ok = (props = {}) => {
  let newProps = mergeProps(props);
  newProps.type = 'ok';
  return getAlertInstance(newProps);
};

export default AlertVue;
