<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseImage",
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
.movie__card-image {
  padding-bottom: 16px;
  max-height: 191px;
  object-fit: cover;
  object-position: top;
}
</style>
