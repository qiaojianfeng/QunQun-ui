<p align="center">
  <a href="https://webweifeng.github.io/QunQun-ui/">
    <img width="200" src="https://webweifeng.github.io/QunQun-ui/qun.png">
  </a>
</p>

<h1 align="center">QunQun UI</h1>

<div align="center">
A Vue.js 2.0 UI Toolkit for Web
</div>

[![npm package](https://img.shields.io/npm/v/qunqun-ui.svg?style=flat-square)](https://www.npmjs.org/package/qunqun-ui)

[![NPM downloads](https://img.shields.io/npm/dm/qunqun-ui.svg?style=flat-square)](http://npmjs.com/qunqun-ui)

# Installation

```bash
npm i qunqun-ui -S
```

# Usage

```js
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

# Development

```bash
# 开发文档
npm run docs:dev

# 构建文档
npm run docs:build
```

# License

MIT
