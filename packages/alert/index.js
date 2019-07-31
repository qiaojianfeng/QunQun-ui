import Alert from './src/index';

Alert.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Alert.name, Alert);
  Vue.prototype.$alert = Alert;
  this.installed = true;
};
export default Alert;
