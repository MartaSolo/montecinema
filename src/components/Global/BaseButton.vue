<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
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
  },
  emits: ["click"],
});
</script>

<template>
  <button class="button" :class="colorTheme" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  justify-content: center;
  align-items: center;
}
</style>
