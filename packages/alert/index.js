import Alert from './src/index';

/* istanbul ignore next */
Alert.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Alert.name, Alert);
  this.installed = true;
};

export default Alert;
