import Prompt from './src/index';

/* istanbul ignore next */
Prompt.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Prompt.name, Prompt);
  this.installed = true;
};

export default Prompt;
