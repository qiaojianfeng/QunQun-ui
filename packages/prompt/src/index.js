import Vue from 'vue';
import PromptVue from './main.vue';

const PromptConstructor = Vue.extend(PromptVue);

let instance = null;
let seed = 1;
let myPrompt = options => {
  let config = { ...options };
  // let title = options.title;
  // let confirmFunc = options.confirm;
  let id = 'prompt_' + seed++;
  instance = new PromptConstructor();
  instance.id = id;
  instance.vm = instance.$mount(); // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el); // 通过原生的DOM API,append挂载到

  Object.keys(config).forEach(k => {
    instance[k] = config[k];
  });
  instance.show();
};

export default myPrompt;
