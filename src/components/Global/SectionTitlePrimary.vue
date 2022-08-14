<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitlePrimary",
  props: {
    title: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    classes() {
      return ["section__title-primary", `${this.class}`];
    },
  },
});
</script>

<template>
  <h1 :class="classes">{{ title }}</h1>
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
.section__title-primary.welcome {
  @include mediumScreen {
    width: 600px;
    align-self: flex-start;
  }
}
</style>
