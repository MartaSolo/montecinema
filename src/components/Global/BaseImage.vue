<script>
import { defineComponent } from "vue";
import ImagePlaceholder from "@/assets/images/star_wars.jpg";

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imagePlaceholder: ImagePlaceholder,
    };
  },
  methods: {
    handleError(e) {
      e.target.src = this.imagePlaceholder;
    },
  },
});
</script>

<template>
  <img :src="src" :alt="alt" @error="handleError" />
</template>

<style lang="scss" scoped></style>
