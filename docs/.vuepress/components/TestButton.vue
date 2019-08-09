<template>
  <div class="test">
    <br> <br>
    <h3>基础用法</h3>
    <p>基础的按钮用法。</p>
    <qun-button class="btn"
                v-for="(item, index) in types"
                :type="item"
                :key="index"
                @click="handleClick(item)">
      {{item}}
    </qun-button>
    <br>
    <qun-button class="btn"
                :full="true">
      宽度100%模式
    </qun-button>
    <qun-button class="btn"
                v-for="(item, index) in types"
                :type="item"
                round
                :key="index+22"
                @click.native="handleClick(item)">
      {{item}}
    </qun-button>
    <br>
    <qun-button class="btn"
                type='text'>
      文字按钮
    </qun-button>
    <qun-button class="btn"
                type='text'
                disabled>
      文字按钮（禁用）
    </qun-button>
    <br>
    <br> <br>
    <h3>禁用状态</h3>
    <p>按钮不可用状态。</p>
    <qun-button class="btn"
                :disabled="true"
                v-for="(item, index) in types"
                :type="item"
                :key="index+11"
                @click.native="handleClick(item)">
      {{item}}
    </qun-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['default', 'primary', 'success', 'warning', 'danger', 'info']
    }
  },
  methods: {
    handleClick(type) {
      console.log('====================================')
      console.log(type)
      console.log('====================================')
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  /* padding: 40px; */
  .btn {
    margin: 10px;
  }
}
</style>
