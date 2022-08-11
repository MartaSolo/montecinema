<script>
import { defineComponent } from "vue";
import HeaderNavMenu from "./HeaderNavMenu.vue";

export default defineComponent({
  components: {
    HeaderNavMenu,
  },
});
</script>

<template>
  <nav class="nav"><HeaderNavMenu /></nav>
</template>

<style lang="scss" scoped>
.nav {
  background-color: yellow;
}
</style>
