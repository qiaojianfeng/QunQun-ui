<template>
  <transition name="toast-fade">
    <div class="pop-toast"
         v-if="visible"
         @touchmove.prevent>
      <!--样式A正方形-->
      <div class="box"
           v-if="style==='A'">
        <i class="icon"
           :class="isOk?'ok':'fail'"></i>
        <span class="message"
              v-html="message"></span>
      </div>
      <!--样式B长方形-->
      <div :class="'box'+style"
           v-if="style==='B'">
        <span class="message"
              v-html="message"></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      autoClose: true,
      timeout: 0,
      visible: false,
      message: '',
      duration: '',
      isOk: true,
      zIndex: 0,
      style: 'A'
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleClick() {
      this.hide();
    },
    callback() {
      console.log('toast over');
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
$ok: 'data:image/png;base64,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';
$fail: '';
.pop-toast {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  .box {
    width: rem(256);
    height: rem(256);
    background: rgba(247, 247, 247, 1);
    border-radius: rem(32);
    color: #1a1a1a;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: rem(80);
      height: rem(80);
      background-size: 100%;
      background-repeat: no-repeat;
      &.ok {
        background-image: url($ok);
      }
      &.fail {
        background-image: url($fail);
      }
    }
    .message {
      font-size: rem(30);
      padding: rem(20);
      text-align: center;
    }
  }
  .boxB {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: rem(21) rem(65);
    text-align: center;
    background: rgba(0, 11, 22, 0.9);
    border-radius: rem(16);
    font-size: rem(30);
    color: #fff;
    display: flex;
    line-height: rem(38);
    align-items: center;
    justify-content: center;
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

