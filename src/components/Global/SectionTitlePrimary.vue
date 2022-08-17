<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitlePrimary",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <h1 class="section__title-primary">{{ title }}</h1>
</template>

<style lang="scss" scoped>
.section__title-primary {
  font-family: $fontTitle;
  font-weight: 600;
  font-size: 3rem;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: $colorGreyTuna;
  text-align: center;
  margin: 0;
  @include mediumScreen {
    font-size: 5rem;
    text-align: left;
  }
}
</style>
