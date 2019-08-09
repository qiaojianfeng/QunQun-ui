<template>
  <div class="test">
    <qun-button class="btn"
                v-for="(item, index) in types"
                :key="index"
                @click.native="handleClick(item)">
      {{item}}
    </qun-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['简洁', '参数调用']
    }
  },
  methods: {
    handleClick(type) {
      if (type === '简洁') {
        this.$confirm
          .show(`这是一个对话框`)
          .then(res => {
            alert('确认')
          })
          .catch(res => {
            alert('取消')
          })
      } else {
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
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  padding: 40px;
  .btn {
    margin: 10px;
  }
}
</style>
