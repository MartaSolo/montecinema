<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageBasic",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    classes() {
      return ["image", `${this.class}`];
    },
  },
});
</script>

<template><img :src="src" :alt="alt" :class="classes" /></template>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
