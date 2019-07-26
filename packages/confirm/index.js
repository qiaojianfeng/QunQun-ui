import Confirm from './src/index';

/* istanbul ignore next */
Confirm.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Confirm.name, Confirm);
  this.installed = true;
};

export default Confirm;
