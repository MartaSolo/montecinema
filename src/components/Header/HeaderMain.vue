<script>
import { defineComponent } from "vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNav.vue";

export default defineComponent({
  components: {
    HeaderLogo,
    HeaderNav,
  },
});
</script>

<template>
  <header class="header">
    <div class="container">
      <HeaderLogo />
      <HeaderNav />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: palevioletred;
  height: 98px;
}
.container {
  height: 100%;
  padding: 1.5rem;
}
</style>
