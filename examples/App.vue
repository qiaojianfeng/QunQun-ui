<template>
  <div id="app">
    <button class="tool"
            v-for="(item, index) in tools"
            :key="index"
            @click="handleClick(item)">
      {{item}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      tools: ['alert', 'confirm', 'notify', 'prompt', 'toast']
    }
  },
  methods: {
    handleClick(type) {
      switch (type) {
        case 'alert':
          this.$alert({
            message: '壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾壹贰叁肆伍陆柒捌玖拾',
            type: 'error'
          })
          break
        case 'prompt':
          this.$prompt({
            title: '我是自定义标题',
            confirm: function(code, hide) {
              console.log('====================================')
              console.log('不好👎')
              console.log('====================================')
              hide()
            }
          })
          break
        case 'notify':
          this.$notify('壹贰叁肆伍陆柒捌玖拾 壹贰叁肆伍陆柒捌玖拾 壹贰叁肆伍陆柒捌玖拾 壹贰叁肆伍陆柒捌玖拾')

          break
        case 'confirm':
          this.$confirm({
            title: '我是自定义标题',
            message: '确认创建社群【{siteName}】确认创建社群【{siteName}\n名称一经确认将无法修改',
            confirmTxt: '好的👌',
            cancelTxt: '不好👎',
            confirm: function() {
              console.log('confirm')
            },
            cancel: function() {
              console.log('cancel')
            }
          })
          break
        case 'toast':
          this.$toast({
            message: '已删除此贴并将对方踢出本群',
            callBack: function() {
              console.log('toast over')
            },
            style: 'B'
          })
          break
      }
    }
  }
}
</script>

<style lang='scss' >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .tool {
    padding: 5px 10px;
    margin: 10px 20px;
    cursor: pointer;
    background-color: #28a745;
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
    color: #fff;
    font-size: 16px;
  }
}
</style>
