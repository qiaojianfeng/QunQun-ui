import Card from './src/main.vue';

/* istanbul ignore next */
Card.install = function(Vue) {
  if (this.installed) return;
  Vue.component(Card.name, Card);
  this.installed = true;
};

export default Card;
