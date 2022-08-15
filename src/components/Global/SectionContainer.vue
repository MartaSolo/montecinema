<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionContainer",
  props: {
    class: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [`container ${this.class}`];
    },
  },
});
</script>

<template>
  <div :class="classes"><slot /></div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 1.5rem;
  border: 1px solid green;
}
</style>
