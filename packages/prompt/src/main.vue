<template>
  <transition name="alert-fade">
    <div class="pop-alert"
         v-if="visible"
         @click.self="handleHide"
         @touchmove.prevent>
      <div class="comp-code">
        <div class="content">
          <i class="icon-close"
             @click="handleHide">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAAXNSR0IArs4c6QAAAkNJREFUSA2tVbtOw0AQjCOlSAqgQsJxSJOamiChlPxGeBSAaPiDdCkpeDUQ+BNKUvEFKSIl+QGqVDYzJ49lX+4sg7CU7Hl3ZnZv7+Fau92+rdlPGIYJf/TX7eD/vSuFFO1346/kzEAYjCUnC9+8jmc3iqLXnDNutVoHAR0KxHF8CufObDb7FrBGbXTpTQ7TEDhJ3w6CIBY7SJ0ZXQExC7bb7e5Re0z9UiRoVCauoECSiyxwr9fbEsFMUy+0JGO6Z/JxMoVpI7Cx9OwPCZj1O+16vb6jdT6uMgh0lc3WzRHrusogSY/KbjQaYYBVWS2XywjlFDsjdGqBG2I4qCdJEuIlht1oiDiIXyHO5d6vEcgW8+ciEcwY7KcEvCQnWCw7kw9cqJskAGOJoBHT1WrV1zttYRHTTt0IgO4daSxbILAMBB6oTACzuRphyHbN9pwMSH82WH4nyQf2kcyiubohAm2uezEnFuWDZePRaFQ3mw8KIYG4XCaLxeIibW8Z1xvjFKH3CIBZY2h1ApbY6XRe8if1L8kc4tNms3nCE5/tqL8mKxPXdLMkclRNVkVcmhtJFPAlQ1u/gLnHTz3P2iKubb1JBHQlY4zbUT0X1mcLZ9AFwj14qds4H0fyQ97KLCLvd429Sdhz3Go86E8govBgyosZVwu/oxOKcUcCZz5+Zck2qqi6oBStuvWzJFXF7XZUScYTPwSQ0zcJf7Og+YSuZNB6RnuvuSYDJsDzkfa8b3+X82K+MfgJbvdzrhnFgeNn4ph31w+u4Z5CKRx7ygAAAABJRU5ErkJggg=="></i>
            <div class="txt-area">
              {{title}}
            </div>
            <div class="input-code">
              <ul>
                <li>{{code1}}</li>
                <li>{{code2}}</li>
                <li>{{code3}}</li>
                <li>{{code4}}</li>
                <li>{{code5}}</li>
                <li>{{code6}}</li>
              </ul>
              <label for="ipt-code"></label>
              <input id="ipt-code"
                   type="tel"
                   maxlength="6"
                   @input="handleInputCode"
                   v-model="code">
          </div>
            </div>
        </div>

      </div>
  </transition>
</template>
<script>
export default {
  name: 'prompt',
  data() {
    return {
      title: '输入六位码',
      visible: false,
      code: ''
    };
  },
  computed: {
    code1() {
      let code = this.code.toString().substr(0, 1);
      if (code) return '*';
      return code;
    },
    code2() {
      let code = this.code.toString().substr(1, 1);
      if (code) return '*';
      return code;
    },
    code3() {
      let code = this.code.toString().substr(2, 1);
      if (code) return '*';
      return code;
    },
    code4() {
      let code = this.code.toString().substr(3, 1);
      if (code) return '*';
      return code;
    },
    code5() {
      let code = this.code.toString().substr(4, 1);
      if (code) return '*';
      return code;
    },
    code6() {
      let code = this.code.toString().substr(5, 1);
      if (code) return '*';
      return code;
    }
  },
  methods: {
    handleHide() {
      this.hide();
    },
    handleInputCode() {
      if (this.checkCode()) {
        this.confirm(this.code, this.hide);
      }
    },
    checkCode() {
      return this.code.length == 6;
    },
    confirm(code) {
      console.log('click confirm');
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s;
}

.alert-fade-enter,
.alert-fade-leave-to {
  opacity: 0;
}

.pop-alert {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: rem(576);
    height: rem(387);
    padding: rem(100) rem(32) rem(70);
    background-color: #f1f1f1;
    border-radius: rem(24);
    z-index: 1;
    .icon-close {
      position: absolute;
      width: rem(30);
      height: rem(30);
      top: rem(30);
      left: rem(30);
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .txt-area {
      position: relative;
      display: flex;
      justify-content: center;
      font-size: rem(36);
      line-height: rem(36);
    }
    .input-code {
      position: relative;
      margin-top: rem(57);
      height: rem(126);
      border-radius: rem(16);
      overflow: hidden;
      background-color: #fff;
      padding-top: rem(19);
      label {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
      input {
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 1px;
        background-color: rgba(255, 238, 83, 0.712);
        opacity: 0;
        z-index: 5;
        -webkit-appearance: none;
      }
      ul {
        width: 100%;
        height: rem(88);
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        font-size: rem(36);
        color: rgba(26, 26, 26, 1);
        &.error {
          color: #f23d4c;
        }
        li {
          flex: 1;
          height: rem(88);
          line-height: rem(88);
          text-align: center;
          border-left: 1px solid #e3e4e6;
          &:first-child {
            border: none;
          }
        }
      }
    }
  }
}
</style>
