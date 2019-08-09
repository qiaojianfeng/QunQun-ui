<template>
  <transition name="toast-fade">
    <div class="pop-toast"
         v-if="visible"
         @touchmove.prevent>
      <div class="box">
        <slot></slot>
        <template v-if="!isSlot">
          <span class="message"
                v-html="message"></span>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      visible: false,
      message: '',
      duration: 2000
    }
  },
  computed: {
    isSlot() {
      return this.$slots.default
    }
  },
  watch: {},
  methods: {
    handleClick() {
      this.hide()
    },
    show() {
      this.visible = true
      this.$emit('onShow')
    },
    hide() {
      this.visible = false
      this.$emit('onHide')
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (this.duration) {
        setTimeout(() => {
          this.hide()
        }, this.duration)
      }
    })
  },
  updated() {},
  destroyed() {}
}
</script>

<style lang="scss" scoped>
@import '../../theme-default/style/var.scss';
@import '../../theme-default/style/mixin.scss';
.pop-toast {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 999;
  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(0, 11, 22, 0.9);
    border-radius: 0.4em;
    padding: 1em;
    font-size: 0.8em;
    color: $__white;
    line-height: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 12em;
    @include MQ(md) {
      max-width: 22em;
    }
  }
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  opacity: 1;
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
}
</style>

