# Toast 消息提示

强提示用于页面中展示重要的提示信息。

### 组件用法

页面中的非浮层元素，不会自动消失。

```vue
<Toast message="这是一个alert提示信息" />
```

### 方法调用

```js
this.$toast.show('这是一个alert提示信息');
```

<ClientOnly>
 <TestToast/>
</ClientOnly>
