<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/header/HeaderNavRedirect.vue";
import MenuIconOpen from "@/assets/images/navigation-menu.svg";
import MenuIconClose from "@/assets/images/close.svg";

export default defineComponent({
  name: "HeaderNavMobile",
  components: {
    BaseButton,
    HeaderNavMenu,
    HeaderNavRedirect,
    HeaderLogo,
    MenuIconOpen,
    MenuIconClose,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>

<template>
  <HeaderLogo />
  <BaseButton
    v-if="!menuOpen"
    type="button"
    class="button__menu open"
    colorTheme="accent-filled"
    @click="toggleMenu"
    ><MenuIconOpen
  /></BaseButton>
  <BaseButton
    v-if="menuOpen"
    type="button"
    class="button__menu close"
    @click="toggleMenu"
    ><MenuIconClose
  /></BaseButton>
  <nav v-if="menuOpen" class="nav">
    <HeaderNavMenu />
    <HeaderNavRedirect />
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  background-color: $colorWhiteSnow;
  width: 100%;
  position: absolute;
  top: 90%;
  left: 0;
}
.button__menu {
  border: 1px solid $colorWhiteSnow;
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
</style>
