import Alert from './alert/index';
import Confirm from './confirm/src';
import Notify from './notification/index';
import Toast from './toast/index';
import Button from './button/index';
import './theme-default/style/reset.scss';
const version = require('../package.json').version;
const components = [Alert, Confirm, Notify, Toast, Button];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$alert = Alert;
  Vue.prototype.$confirm = Confirm;
  Vue.prototype.$notify = Notify;
  Vue.prototype.$toast = Toast;
  install.installed = true;
};

export default {
  version,
  Alert,
  Confirm,
  Notify,
  Toast,
  Button,
  install
};
