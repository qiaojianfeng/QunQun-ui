<template>
  <div class="test">
    <h3>基础</h3>
    <qun-card>
      基础卡片
    </qun-card>
    <h3>自定义卡片头部</h3>
    <qun-card>
      <div slot="header">
        头部
      </div>
      <ul class="body">
        <li v-for="(item, index) in 4"
            :key="index">
          列表内容{{index+1}}
        </li>
      </ul>
    </qun-card>
    <h3>卡片阴影</h3>
    <p>可对阴影的显示进行配置。</p>
    <qun-card class="card3"
              shadow="always">
      总是显示
    </qun-card>
    <qun-card class="card3"
              shadow="hover">
      鼠标悬浮时显示
    </qun-card>
    <qun-card class="card3"
              shadow="never">
      从不显示
    </qun-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.test {
  clear: both;
  overflow: hidden;
  h3 {
    padding: 10px 0;
  }
  .body {
    margin: 0;
    padding: 0;
  }
  .card3 {
    width: 30%;
    float: left;
    margin-right: 10px;
  }
}
</style>
