## Alert 警告

用于页面中展示重要的提示信息(强提示需要手动关闭)。

### 基本用法

页面中的非浮层元素，不会自动消失。

#### Alert

组件提供四种主题，由`type`属性指定，默认值为`info`。

```javascript
/*
* message
* type:'info', 'warn', 'error', 'ok'
* 支持只传入一个String类型的message
*/

this.$alert({
  message: 'aaa',
  type: 'ok'
});
or;
this.$alert('aaa');
```

#### Confrim

```javascript
/*
* title
* cancelTxt
* confirmTxt
* cancelFunc
* confirmFunc
* isShowTitle
* useConfirm
*/

this.$confirm({
  title: '我是自定义标题',
  message: '确认创建社群【{siteName}\n名称一经确认将无法修改',
  confirmTxt: '好的👌',
  cancelTxt: '不好👎',
  confirm: function() {
    console.log('confirm');
  },
  cancel: function() {
    console.log('cancel');
  }
});
```

#### Notify

```javascript
/*
* message
* autoClose
* duration
*/

this.$notify({
  message: '壹贰叁肆伍陆柒捌玖拾',
  autoClose: false',
  duration: 2000
});
or;

this.$notify('壹贰叁肆伍陆柒捌玖拾');
```

#### Toast

组件提供四种主题，由`type`属性指定，默认值为`info`。

```javascript
/*
* message
* autoClose
* duration
* callBack
* style  A：保留之前正方形样式 B：长方形样式
*/

this.$toast({
  message: '已删除此贴并将对方踢出本群',
  callBack: function() {
    console.log('toast over');
  },
  style: 'B'
});
or;

this.$toast('壹贰叁肆伍陆柒捌玖拾');
```

#### Prompt

```javascript
/*
* title
* confirmFunc
*/

this.$prompt({
  title: '我是自定义标题',
  confirm: function(code, hide) {
    console.log('====================================');
    console.log('不好👎');
    console.log('====================================');
    hide();
  }
});
```
