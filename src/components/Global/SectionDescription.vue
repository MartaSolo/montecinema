<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionDescription",
  props: {
    description: {
      type: String,
      reqiured: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    classes() {
      return ["section__description", `${this.class}`];
    },
  },
});
</script>

<template>
  <p :class="classes">{{ description }}</p>
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
  @include mediumScreen {
    text-align: left;
  }
}
.section__description.welcome {
  width: 600px;
  align-self: flex-start;
}
</style>
