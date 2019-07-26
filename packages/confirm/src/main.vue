<template>
  <div>
    <transition name="confirm-fade">
      <div class="pop-confirm"
           v-if="visible"
           @touchmove.prevent
           @click.stop="handleClick">
        <div class="border">
          <div class="content">
            <div class="message">
              <h6 class="title"
                  v-if="isShowTitle">{{title}}</h6>
              <span>{{message}}</span>
            </div>
            <div class="btns">
              <a class="btn-cancel"
                 @click.stop="handleCancel">{{cancelTxt}}</a>
              <a class="btn-confirm"
                 v-if="useConfirm"
                 @click.stop="handleConfirm">{{confirmTxt}}</a>
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
  data() {
    return {
      visible: false,
      message: '',
      title: '提醒',
      cancelTxt: '取消',
      confirmTxt: '确认',
      isShowTitle: true,
      isMaskFunc: true,
      useConfirm: true
    };
  },
  methods: {
    handleClick() {
      if (this.isMaskFunc) {
        this.cancel();
      }
      this.hide();
    },
    handleCancel() {
      this.cancel();
      this.hide();
    },
    handleConfirm() {
      this.confirm();
      this.hide();
    },
    cancel() {
      console.log('click cancel');
    },
    confirm() {
      console.log('click confirm');
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.confirm-fade-enter-active,
.confirm-fade-leave-active {
  transition: opacity 0.3s;
}

.confirm-fade-enter,
.confirm-fade-leave-to {
  opacity: 0;
}

.pop-confirm {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  .border {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    .content {
      width: 100%;
      min-height: rem(200);
      background-color: #fff;
      border-radius: rem(24);
      overflow: hidden;
      .message {
        font-size: rem(28);
        color: #222222;
        padding: rem(46) rem(40) rem(40);
        text-align: center;
        h6 {
          font-size: rem(36);
          margin-bottom: rem(14);
        }
        span {
          font-size: rem(28);
          line-height: 1.2;
          white-space: pre-wrap;
          width: 100%;
          display: block;
        }
      }
      .btns {
        display: flex;
        border-top: 1px solid #f2f2f2;
        a {
          display: block;
          flex: 1;
          height: rem(86);
          line-height: rem(86);
          font-size: rem(34);
          color: #007aff;
          text-align: center;
          &:active {
            background-color: #f2f2f2;
          }
          &:last-child {
            /* font-weight: bold; */
            border-left: 1px solid #f2f2f2;
          }
        }
      }
    }
  }
}

.confirm {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  letter-spacing: 0;
  background-color: whitesmoke;
  z-index: 100;
  .content {
    width: 100%;
    padding: rem(20) rem(40);
    .message {
      width: 100%;
      text-align: center;
      color: #123;
      font-size: rem(30);
      line-height: 1.2;
    }
  }

  button {
    display: inline-block;
    width: 48%;
    color: rgb(255, 255, 255);
    font-size: 1em;
    font-family: inherit;
    line-height: 1;
    padding: rem(14);
    border: 2px solid rgb(255, 255, 255);
    background-color: #fff;
    box-sizing: border-box;
    &.btn-cancel {
      color: rgb(179, 179, 179);
      border: 2px solid rgb(179, 179, 179);
    }
    &.btn-confirm {
      color: rgb(34, 192, 100);
      border: 2px solid rgb(34, 192, 100);
    }
  }
}
</style>

