<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitleSecondary",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
});
</script>

<template>
  <h2 class="section__title-secondary">{{ title }}</h2>
  <h2 v-if="subtitle" class="section__subtitle-secondary">
    {{ subtitle }}
  </h2>
</template>

<style lang="scss" scoped>
.section__title-secondary,
.section__subtitle-secondary {
  font-family: $fontTitle;
  font-weight: 600;
  font-size: 3rem;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: $colorGreyTuna;
  text-align: left;
  margin: 0;
  @include mediumScreen {
    font-size: 4rem;
  }
}
.section__subtitle-secondary {
  color: $colorGreyJumbo;
  padding-bottom: 32px;
}
</style>
