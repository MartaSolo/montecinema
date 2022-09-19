<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/header/HeaderNavRedirect.vue";
import MenuIconOpen from "@/assets/images/navigation-menu.svg";
import MenuIconClose from "@/assets/images/close.svg";
import HeaderLanguage from "@/components/header/HeaderLanguage.vue";

export default defineComponent({
  name: "HeaderNavMobile",
  components: {
    BaseButton,
    HeaderNavMenu,
    HeaderNavRedirect,
    HeaderLogo,
    MenuIconOpen,
    MenuIconClose,
    HeaderLanguage,
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
    closeMenu() {
      this.menuOpen = false;
    },
  },
});
</script>

<template>
  <HeaderLogo />
  <HeaderLanguage />
  <BaseButton
    v-if="!menuOpen"
    type="button"
    class="menu__open"
    @click="toggleMenu"
    ><MenuIconOpen
  /></BaseButton>
  <BaseButton
    v-if="menuOpen"
    type="button"
    class="menu__close"
    @click="toggleMenu"
    ><MenuIconClose
  /></BaseButton>
  <nav v-if="menuOpen" class="nav">
    <HeaderNavMenu @click="closeMenu" />
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
  border: 1px solid red;
}
.menu__open,
.menu__close {
  border: 1px solid $colorWhiteSnow;
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
</style>
