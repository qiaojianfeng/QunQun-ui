# Notify 消息通知

悬浮出现在页面角落，显示全局的通知提醒消息。

### 组件用法

```vue
<Notify message="这是一个通知提醒消息" />
```

### 方法调用

```js
this.$notify.show('这是一个通知提醒消息');
```

<ClientOnly>
 <TestNotify/>
</ClientOnly>
