<script>
import { defineComponent } from "vue";
import ButtonIcon from "../Global/ButtonIcon.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNavMenu from "./HeaderNavMenu.vue";
import HeaderNavRedirect from "./HeaderNavRedirect.vue";

export default defineComponent({
  name: "HeaderNavMobile",
  emits: ["toggleMenu"],
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
    @click="toggleMenu"
  />
  <ButtonIcon
    v-if="menuOpen"
    icon="closeMenu"
    class="close"
    @click="toggleMenu"
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
