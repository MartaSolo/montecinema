<script>
import { defineComponent } from "vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/header/HeaderNavRedirect.vue";

export default defineComponent({
  name: "HeaderNavDesktop",
  components: {
    HeaderLogo,
    HeaderNavMenu,
    HeaderNavRedirect,
  },
});
</script>

<template>
  <nav class="nav">
    <HeaderLogo />
    <HeaderNavMenu />
    <HeaderNavRedirect />
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  @include mediumScreen {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
