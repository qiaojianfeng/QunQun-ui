<template>
  <div class="test">
    <button class="btn"
            v-for="(item, index) in types"
            :key="index"
            @click="handleClick(item)">
      {{item}}
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['info', 'warn', 'error', 'ok']
    }
  },
  methods: {
    handleClick(type) {
      this.$alert[type](`这是一个${type}类型信息框`)
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  padding: 40px;
  .btn {
    padding: 5px 20px;
    background: #4bcde7;
    border-radius: 10px;
    margin-right: 20px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
