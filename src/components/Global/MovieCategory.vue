<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieCategory",
  props: {
    category: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="movie__category">{{ category }}</div>
</template>

<style lang="scss" scoped>
.movie__category {
  display: inline-block;
  font-weight: 700;
  font-size: 0.9rem;
  color: $colorRedBittersweet;
  padding: 8px 16px;
  background-color: $colorRedWispPink;
  border-radius: 24px;
}
</style>
