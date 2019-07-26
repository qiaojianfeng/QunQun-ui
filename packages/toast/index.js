import Toast from './src/index';

/* istanbul ignore next */
Toast.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Toast.name, Toast);
  this.installed = true;
};

export default Toast;
