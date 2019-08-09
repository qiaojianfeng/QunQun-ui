# Comfirm 对话框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

### 组件用法

页面中的非浮层元素，不会自动消失。

```vue
<Comfirm message="这是一个alert提示信息" />
```

### 方法调用

```js
// 简洁调用
this.$confirm
  .show('这是一个alert提示信息')
  .then(res => {
    // 确认
  })
  .catch(res => {
    // 取消
  });
// 参数调用
this.$confirm
  .show({
    title: '提示',
    message: '这是一个alert提示信息',
    cancelText: '不好',
    confirmText: '可以的'
  })
  .then(res => {
    // 确认
  })
  .catch(res => {
    // 取消
  });
```

<ClientOnly>
 <TestConfirm />
</ClientOnly>
