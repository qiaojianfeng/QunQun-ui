<template>
  <transition name="notification-fade">
    <div class="pop-notification"
         v-if="visible">
      <div class="message">{{message}}</div>
      <button @click="handleClick"
              class="close"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAAXNSR0IArs4c6QAAAkNJREFUSA2tVbtOw0AQjCOlSAqgQsJxSJOamiChlPxGeBSAaPiDdCkpeDUQ+BNKUvEFKSIl+QGqVDYzJ49lX+4sg7CU7Hl3ZnZv7+Fau92+rdlPGIYJf/TX7eD/vSuFFO1346/kzEAYjCUnC9+8jmc3iqLXnDNutVoHAR0KxHF8CufObDb7FrBGbXTpTQ7TEDhJ3w6CIBY7SJ0ZXQExC7bb7e5Re0z9UiRoVCauoECSiyxwr9fbEsFMUy+0JGO6Z/JxMoVpI7Cx9OwPCZj1O+16vb6jdT6uMgh0lc3WzRHrusogSY/KbjQaYYBVWS2XywjlFDsjdGqBG2I4qCdJEuIlht1oiDiIXyHO5d6vEcgW8+ciEcwY7KcEvCQnWCw7kw9cqJskAGOJoBHT1WrV1zttYRHTTt0IgO4daSxbILAMBB6oTACzuRphyHbN9pwMSH82WH4nyQf2kcyiubohAm2uezEnFuWDZePRaFQ3mw8KIYG4XCaLxeIibW8Z1xvjFKH3CIBZY2h1ApbY6XRe8if1L8kc4tNms3nCE5/tqL8mKxPXdLMkclRNVkVcmhtJFPAlQ1u/gLnHTz3P2iKubb1JBHQlY4zbUT0X1mcLZ9AFwj14qds4H0fyQ97KLCLvd429Sdhz3Go86E8govBgyosZVwu/oxOKcUcCZz5+Zck2qqi6oBStuvWzJFXF7XZUScYTPwSQ0zcJf7Og+YSuZNB6RnuvuSYDJsDzkfa8b3+X82K+MfgJbvdzrhnFgeNn4ph31w+u4Z5CKRx7ygAAAABJRU5ErkJggg=="></button>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'notify',
  props: {
    message: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2500
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClick() {
      this.hide()
    },
    show() {
      this.visible = true
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

.pop-notification {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  top: 0;
  width: 100%;
  padding: 0.8em;
  left: 50%;
  transform: translateX(-50%);
  background-color: $__white;
  box-shadow: 0 2px 4px #d4d4d4;
  z-index: 999;
  box-sizing: border-box;
  @include MQ(md) {
    border-radius: 2em;
    width: 30em;
    top: 1em;
  }
  .message {
    color: #123;
    font-size: 0.8em;
    line-height: 1.2;
    padding-right: 0.5em;
  }
  .close {
    color: #123;
    font-size: 0.7em;
    font-family: inherit;
    line-height: 1;
    width: 1em;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.notification-fade-enter-active {
  transition: top 0.3s;
}

.notification-fade-leave-active {
  transition: top 1s;
}

.notification-fade-enter,
.notification-fade-leave-to {
  top: -100%;
}
</style>

