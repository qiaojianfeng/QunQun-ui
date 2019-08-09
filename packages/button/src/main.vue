<template>
  <button :type="nativeType"
          :disabled="disabled"
          :autofocus="autofocus"
          :class="['qun-button',`qun-button_${type}`,round&&'is-round',circle&&'is-circle',full&&'is-full']">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'QunButton',
  props: {
    type: {
      // default /primary / success / warning / danger / info / text
      default: 'primary',
      type: String
    },
    // button / submit / reset
    nativeType: {
      default: 'button',
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
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
.qun-button {
  font-size: $__font-size-base;
  transition: 0.1s;
  font-weight: $__button-font-weight;
  padding: 0.7em 2em;
  color: $__button-font-color_default;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.12);
  user-select: none;
  border-radius: $__button-border-round_default;
  @each $key,
    $type in (default: $__default, primary: $__primary, success: $__success, warning: $__warning, danger: $__danger, info: $__info)
  {
    &.qun-button_#{$key} {
      background-color: $type;
      @if $key == 'default' {
        &:hover,
        &:focus {
          color: $__button-font-color_default;
        }
      } @else {
        color: $__button-font-color;
      }
      &:active {
        outline: none;
        @include activeBgColor($key);
      }
      &:disabled:active,
      &:disabled:hover,
      &:disabled:focus {
        background-color: $type;
      }
    }
  }

  &:hover,
  &:focus {
    color: $__button-font-color;
    border-color: $__border-color;
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.qun-button_text {
    border: none;
    background: none;
    box-shadow: none;
    padding: 0 1em;
    width: auto !important;
    &:hover,
    &:focus {
      color: $__primary;
    }
    &:disabled {
      &:hover,
      &:focus {
        color: $__button-font-color_default;
      }
    }
  }
  &.is-round {
    border-radius: $__button-border-round;
  }
  &.is-circle {
    padding: 1em;
    border-radius: $__button-border-circle;
  }
  &.is-full {
    width: 100%;
  }
}
</style>

