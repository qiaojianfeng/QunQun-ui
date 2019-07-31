# Alert 警告

强提示用于页面中展示重要的提示信息。

### 组件用法

页面中的非浮层元素，不会自动消失。

```vue
<alert message="这是一个alert提示信息" />
```

### 方法调用

```js
this.$alert.show('这是一个alert提示信息');
this.$alert.info('这是一个alert提示信息');
this.$alert.warn('这是一个alert提示信息');
this.$alert.error('这是一个alert提示信息');
this.$alert.ok('这是一个alert提示信息');
```

<ClientOnly>
 <TestAlert/>
</ClientOnly>
