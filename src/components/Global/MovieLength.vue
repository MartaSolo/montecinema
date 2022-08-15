<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieLength",
  props: {
    length: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    movieLength() {
      return `${this.movie.length / 60}h ${this.movie.length % 60}min`;
    },
    classes() {
      return [`movie-length ${this.class}`];
    },
  },
});
</script>

<template>
  <div :class="classes">{{ length }}</div>
</template>

<style lang="scss" scoped>
.movie-length {
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorGreyJumbo;
  padding: 16px 0;
}
</style>
