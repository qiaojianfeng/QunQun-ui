---
home: true
heroImage: qun.png
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 简洁至上
    details: 超简洁类promise调用模式，同时支持全局组件，按需加载，slot插值等方便易上手，。
  - title: Vue 驱动
    details: 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以自定义主题。
  - title: 响应式
    details: 同时满足不同设备尺寸要求，采用em单位方便响应式开发。
footer: MIT Licensed | Copyright © 2018-present Feng
---

### 像数 1, 2, 3 一样容易

```bash
import Vue from 'vue';
import QunQunUi from 'qunqun-ui';
import 'qunqun-ui/lib/qunUi.css';
import App from './App.vue';

Vue.use(QunQunUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

::: warning 注意
请确保你的 Vue.js 版本 >= 2.6 。
:::
