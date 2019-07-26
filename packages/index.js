import Alert from './alert/index'
import Confirm from './confirm/src'
import Notify from './notification/index'
import Prompt from './prompt/index'
import Toast from './toast/index'
const version = require('../package.json').version
// import './theme-default/style/reset.scss';
const components = [Alert, Confirm, Notify, Prompt, Toast]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$notify = Notify
  Vue.prototype.$prompt = Prompt
  Vue.prototype.$toast = Toast
  install.installed = true
}

export default {
  version,
  Alert,
  Confirm,
  Notify,
  Prompt,
  Toast,
  install
}
