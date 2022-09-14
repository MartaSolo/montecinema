<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieLength",
  props: {
    length: {
      type: Number,
      required: true,
    },
  },
  computed: {
    movieLength() {
      const hours = Math.floor(this.length / 60);
      const minutes = String(this.length % 60);
      return minutes.length === 1
        ? `${hours}h 0${minutes} min`
        : `${hours}h ${minutes} min`;
    },
  },
});
</script>

<template>
  <div class="movie__length" data-spec="length">{{ movieLength }}</div>
</template>

<style lang="scss" scoped>
.movie__length {
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorGreyJumbo;
  padding: 16px 0;
}
</style>
