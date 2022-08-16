<script>
import { defineComponent } from "vue";
import ButtonIcon from "@/components/global/ButtonIcon.vue";
import HeaderLogo from "@/components/header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/header/HeaderNavRedirect.vue";

export default defineComponent({
  name: "HeaderNavMobile",
  components: {
    ButtonIcon,
    HeaderNavMenu,
    HeaderNavRedirect,
    HeaderLogo,
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
  <ButtonIcon
    v-if="!menuOpen"
    icon="openMenu"
    class="open"
    @iconClick="toggleMenu"
  />
  <ButtonIcon
    v-if="menuOpen"
    icon="closeMenu"
    class="close"
    @iconClick="toggleMenu"
  />
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
</style>
