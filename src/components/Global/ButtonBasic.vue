<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonBasic",
  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: "red-white",
    },
  },
  computed: {
    classes() {
      return [`button button__${this.colorTheme}`];
    },
  },
});
</script>

<template>
  <button>{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  justify-content: center;
  align-items: center;
}
</style>
