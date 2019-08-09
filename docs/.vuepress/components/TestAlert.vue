<template>
  <div class="test">
    <qun-button class="btn"
                v-for="(item, index) in types"
                :key="index"
                :type="transformType(item)"
                @click.native="handleClick(item)">
      {{item}}
    </qun-button>

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
    },
    transformType(type) {
      switch (type) {
        case 'info':
          return 'info'
        case 'warn':
          return 'warning'
        case 'error':
          return 'danger'
        case 'ok':
          return 'success'
      }
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
