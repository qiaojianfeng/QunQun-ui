# 快速上手

本节将介绍如何在项目中使用 QunQunUi.

## 引入 QunQunUi

你可以引入整个 QunQunUi，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 QunQunUi。

### 完整引入

在 main.js 中写入以下内容：

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

以上代码便完成了 QunQunUi 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

```bash
import Vue from 'vue';
import { Alert, Toast } from 'qunqun-ui';
import App from './App.vue';

Vue.component(Alert.name, Alert);
Vue.component(Toast.name, Toast);
/* 或写为
 * Vue.use(Alert)
 * Vue.use(Toast)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});

```

## 开始使用

至此，一个基于 Vue 和 QunQunUi 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
