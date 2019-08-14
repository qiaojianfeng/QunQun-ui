<template>
  <div :class="['qun-card',shadow]">
    <div class="qun-card_header"
         v-if="$slots.header || header">
      <div v-if="header"
           v-html="header"></div>
      <template v-else>
        <slot name="header"></slot>
      </template>
    </div>
    <div class="qun-card_body"
         :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QunCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: 'always'
    },
    bodyStyle: {
      type: Object,
      default: function() {
        return { padding: '16px' }
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {},
  destroyed() {}
}
</script>

<style lang="scss" scoped>
@import '../../theme-default/style/var.scss';
@import '../../theme-default/style/mixin.scss';
.qun-card {
  border-radius: $__card-border-radius;
  border: $__card-border;
  background-color: $__card-background-color;
  overflow: hidden;
  transition: 0.3s;
  .qun-card_header {
    padding: $__padding;
    border-bottom: $__card-border;
  }
  /* .qun-card_body {
    padding: $__padding;
  } */
  &.always {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &.hover {
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  &.never {
    box-shadow: none;
  }
}
</style>

