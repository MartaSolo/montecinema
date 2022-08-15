<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieCategory",
  props: {
    category: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [`movie-category ${this.class}`];
    },
  },
});
</script>

<template>
  <div :class="classes">{{ category }}</div>
</template>

<style lang="scss" scoped>
.movie-category {
  display: inline-block;
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorRedBittersweet;
  padding: 8px 16px;
  background-color: $colorRedWispPink;
  border-radius: 24px;
}
</style>
