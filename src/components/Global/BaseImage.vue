<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseImage",
});
</script>

<template><img class="image" /></template>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
