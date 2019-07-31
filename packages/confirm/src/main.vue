<template>
  <div>
    <transition name="confirm-fade">
      <div class="qun-confirm"
           v-if="visible"
           @touchmove.prevent
           @click.stop="handleClick">
        <div class="container">
          <div class="content">
            <div class="message">
              <h3 class="title"
                  v-if="title">{{title}}</h3>
              <span>{{message}}</span>
              <slot></slot>
            </div>
            <div class="btns">
              <a class="btn-cancel"
                 @click.stop="handleCancel">{{cancelText}}</a>
              <a class="btn-confirm"
                 v-if="useConfirm"
                 @click.stop="handleConfirm">{{confirmText}}</a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'confirm',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    useConfirm: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    }
  },

  methods: {
    handleClick() {
      this.hide()
    },
    handleCancel() {
      this.cancel()
      this.hide()
    },
    handleConfirm() {
      this.confirm()
      this.hide()
    },
    cancel() {
      this.$emit('cancel', this)
    },
    confirm() {
      this.$emit('confirm', this)
    },
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../theme-default/style/var.scss';
@import '../../theme-default/style/mixin.scss';
.confirm-fade-enter-active,
.confirm-fade-leave-active {
  transition: opacity 0.3s;
}

.confirm-fade-enter,
.confirm-fade-leave-to {
  opacity: 0;
}

.qun-confirm {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: $mask-background-color;
  z-index: $mask-zindex;
  .container {
    width: $message-box-width;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    @include MQ(md) {
      width: 26em;
    }
    .content {
      width: 100%;
      background-color: $white;
      border-radius: 0.4em;
      overflow: hidden;
      box-sizing: border-box;
      .message {
        min-height: 5em;
        font-size: 1em;
        color: $black;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1em;
        .title {
          margin-bottom: 1em;
          font-size: 1.2em;
        }
        span {
          line-height: 1.2;
          white-space: pre-wrap;
          width: 100%;
          display: block;
        }
      }
      .btns {
        display: flex;
        border-top: 1px solid $border-color;
        a {
          display: block;
          flex: 1;
          height: 2.6em;
          line-height: 2.6em;
          font-size: 1em;
          color: $blue;
          text-align: center;
          &:active {
            background-color: $border-color;
          }
          &:last-child {
            border-left: 1px solid $border-color;
          }
        }
      }
    }
  }
}
</style>

