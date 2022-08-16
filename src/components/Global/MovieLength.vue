<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieLength",
  props: {
    length: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="movie__length">{{ length }}</div>
</template>

<style lang="scss" scoped>
.movie__length {
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorGreyJumbo;
  padding: 16px 0;
}
</style>
