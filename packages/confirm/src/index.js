import Vue from 'vue';
import ConfirmVue from './main.vue';

const ConfirmConstructor = Vue.extend(ConfirmVue);

let instance = null;
let seed = 1;

let myConfirm = options => {
  /* 全部需要输入的参数
  * message
  * title
  * cancelTxt
  * confirmTxt
  * cancelFunc
  * confirmFunc
  * isShowTitle
  * useConfirm
  */
  let config = { ...options };
  let id = 'comfirm_' + seed++;
  instance = new ConfirmConstructor();
  instance.id = id;
  instance.vm = instance.$mount(); // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el); // 通过原生的DOM API,append挂载到

  Object.keys(config).forEach(k => {
    instance[k] = config[k];
  });
  instance.show();
};

export default myConfirm;
