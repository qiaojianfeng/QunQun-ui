import Notify from './src/index';

/* istanbul ignore next */
Notify.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Notify.name, Notify);
  Vue.prototype.$notify = Notify;
  this.installed = true;
};

export default Notify;
