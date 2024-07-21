<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    to: {
      type: Object,
      default: null,
    },
    colorTheme: {
      type: String,
      validator(value) {
        return [
          "accent-filled",
          "accent-empty",
          "accent-text",
          "light-filled",
          "light-empty",
          "dark-filled",
          "dark-empty",
        ].includes(value);
      },
    },
    size: {
      type: String,
      validator(value) {
        return ["large", "medium", "small", "tiny"].includes(value);
      },
    },
  },
  emits: ["click"],
  computed: {
    element() {
      if (this.$attrs.href) {
        return "a";
      }
      return this.to ? "router-link" : "button";
    },
    classes() {
      return [
        "button",
        this.size ? `button__${this.size}` : "",
        this.colorTheme ? `${this.colorTheme}` : "",
      ];
    },
  },
});
</script>

<template>
  <component
    :is="element"
    :to="to"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $fontSecondary;
  font-weight: 500;
  line-height: 1.1rem;
  border-radius: 64px;
  &:disabled {
    cursor: not-allowed;
  }
}
.button__large {
  height: 56px;
  padding: 19px 40px;
  font-size: 1.1rem;
}
.button__medium {
  height: 40px;
  padding: 12px 32px;
  font-size: 1rem;
}
.button__small {
  height: 32px;
  padding: 9px 24px;
  font-size: 0.9rem;
}
.button__tiny {
  height: 24px;
  padding: 5px 16px;
  font-size: 0.9rem;
}

// color themes
.accent-filled {
  background-color: $colorRedCherry;
  color: $colorWhiteSnow;
  border: 2px solid $colorRedCherry;
  &:hover:not(:disabled) {
    border: 2px solid $colorRedTotemPole;
  }
  &:disabled {
    border: 2px solid $colorRedCherry;
  }
}

.accent-empty {
  background-color: $colorWhiteSnow;
  color: $colorRedCherry;
  border: 2px solid $colorRedCherry;
  &:hover:not(:disabled) {
    border: 2px solid $colorRedTotemPole;
  }
}
.accent-text {
  background-color: $colorWhiteSnow;
  color: $colorRedCherry;
  border: 2px solid $colorWhiteSnow;
  &:hover:not(:disabled) {
    border: 2px solid $colorRedBittersweet;
  }
}

.light-filled {
  background-color: $colorRedFairPink;
  color: $colorRedCherry;
  border: 2px solid $colorRedFairPink;
  &:hover:not(:disabled) {
    border: 2px solid $colorRedSweetPink;
  }
}
.light-empty {
  background-color: $colorWhiteSnow;
  color: $colorRedSweetPink;
  border: 2px solid $colorRedSweetPink;
  &:hover:not(:disabled) {
    border: 2px solid $colorRedCherry;
    color: $colorRedCherry;
  }
}
.dark-filled {
  background-color: $colorGreyTuna;
  color: $colorWhiteSnow;
  border: 2px solid $colorGreyTuna;
  &:hover:not(:disabled) {
    border: 2px solid $colorGreyBombay;
  }
}
.dark-empty {
  background-color: $colorWhiteSnow;
  color: $colorGreyTuna;
  border: 2px solid $colorGreyTuna;
  &:hover:not(:disabled) {
    border: 2px solid $colorGreyBombay;
  }
}
</style>
