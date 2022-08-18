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
      validatro(value) {
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
      return {
        button: true,
        button__large: this.size === "large",
        button__medium: this.size === "medium",
        button__small: this.size === "small",
        button__tiny: this.size === "tiny",
        accent__filled: this.colorTheme === "accent-filled",
        accent__empty: this.colorTheme === "accent-empty",
        accent__text: this.colorTheme === "accent-text",
        light__filled: this.colorTheme === "light-filled",
        light__empty: this.colorTheme === "light-empty",
        dark__filled: this.colorTheme === "dark-filled",
        dark__empty: this.colorTheme === "dark-empty",
      };
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
.accent__filled {
  background-color: $colorRedCherry;
  color: $colorWhiteSnow;
  border: 2px solid $colorRedCherry;
  &:hover {
    border: 2px solid $colorRedTotemPole;
  }
}

.accent__empty {
  background-color: $colorWhiteSnow;
  color: $colorRedCherry;
  border: 2px solid $colorRedCherry;
  &:hover {
    border: 2px solid $colorRedTotemPole;
  }
}
.accent__text {
  background-color: $colorWhiteSnow;
  color: $colorRedCherry;
  border: 2px solid $colorWhiteSnow;
  &:hover {
    border: 2px solid $colorRedBittersweet;
  }
}

.light__filled {
  background-color: $colorRedFairPink;
  color: $colorRedCherry;
  border: 2px solid $colorRedFairPink;
  &:hover {
    border: 2px solid $colorRedSweetPink;
  }
}
.light__empty {
  background-color: $colorWhiteSnow;
  color: $colorRedSweetPink;
  border: 2px solid $colorRedSweetPink;
  &:hover {
    border: 2px solid $colorRedCherry;
  }
}
.dark__filled {
  background-color: $colorGreyTuna;
  color: $colorWhiteSnow;
  border: 2px solid $colorGreyTuna;
  &:hover {
    border: 2px solid $colorGreyMid;
  }
}
.dark__empty {
  background-color: $colorWhiteSnow;
  color: $colorGreyTuna;
  border: 2px solid $colorGreyTuna;
  &:hover {
    border: 2px solid $colorGreyMid;
  }
}
</style>
