<script>
import { defineComponent } from "vue";
import ButtonIcon from "@/components/Global/ButtonIcon.vue";
import HeaderLogo from "@/components/Header/HeaderLogo.vue";
import HeaderNavMenu from "@/components/Header/HeaderNavMenu.vue";
import HeaderNavRedirect from "@/components/Header/HeaderNavRedirect.vue";

export default defineComponent({
  name: "HeaderNavMobile",
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
  components: {
    ButtonIcon,
    HeaderNavMenu,
    HeaderNavRedirect,
    HeaderLogo,
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
