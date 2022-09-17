<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionDescription",
  props: {
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <p class="section__description">{{ description }}</p>
</template>

<style lang="scss" scoped>
.section__description {
  font-family: $fontSecondary;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 170%;
  letter-spacing: 0.015em;
  text-align: center;
  color: $colorGreyTuna;
  margin: 0;
  white-space: pre-line;
  @include mediumScreen {
    text-align: left;
  }
}
</style>
