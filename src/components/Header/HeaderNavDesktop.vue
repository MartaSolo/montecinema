<script>
import { defineComponent } from "vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/header/HeaderNavRedirect.vue";
import HeaderLanguage from "@/components/header/HeaderLanguage.vue";

export default defineComponent({
  name: "HeaderNavDesktop",
  components: {
    HeaderLogo,
    HeaderNavMenu,
    HeaderNavRedirect,
    HeaderLanguage,
  },
});
</script>

<template>
  <nav class="nav">
    <HeaderLogo />
    <HeaderNavMenu />
    <HeaderNavRedirect />
  </nav>
  <HeaderLanguage />
</template>

<style lang="scss" scoped>
.nav {
  @include mediumScreen {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
