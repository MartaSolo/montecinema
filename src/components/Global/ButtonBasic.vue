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
    class: {
      type: String,
    },
    colorTheme: {
      type: String,
      default: "red-white",
    },
  },
  computed: {
    classes() {
      return [`button ${this.class} button__${this.colorTheme}`];
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
