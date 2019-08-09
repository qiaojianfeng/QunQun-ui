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
      this.$toast[type](`这是一个Toast消息提示这是`)
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  .btn {
    margin: 10px;
  }
}
</style>
