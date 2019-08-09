import Button from './src/main.vue';

/* istanbul ignore next */
Button.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Button.name, Button);
  this.installed = true;
};

export default Button;
