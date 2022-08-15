<script>
import { defineComponent } from "vue";
import HeaderLogo from "@/components/Header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/Header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/Header/HeaderNavRedirect.vue";

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
    @include flexRowCenterCenter;
    justify-content: space-between;
  }
}
</style>
