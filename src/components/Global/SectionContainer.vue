<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionContainer",
});
</script>

<template>
  <div class="container"><slot /></div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 0 1.5rem;
}
</style>
