/**
 * 扩展 VuePress 应用
 */
import QunQunUi from '../../packages/index';
export default ({ Vue }) => {
  // ...做一些其他的应用级别的优化
  Vue.use(QunQunUi);
};
