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
      types: ['show']
    }
  },
  methods: {
    handleClick(type) {
      this.$notify[type](`这是一个消息通知`).then(res => {})
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
