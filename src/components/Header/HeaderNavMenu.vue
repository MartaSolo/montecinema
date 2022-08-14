<script>
import { defineComponent } from "vue";
import HeaderNavLink from "./HeaderNavLink.vue";

export default defineComponent({
  name: "HeaderNavMenu",
  components: {
    HeaderNavLink,
  },
});
</script>

<template>
  <div class="nav__menu">
    <HeaderNavLink url="#" text="Movies" />
    <HeaderNavLink url="#" text="Screenings" />
    <HeaderNavLink url="#" text="Contact us" />
  </div>
</template>

<style lang="scss" scoped>
.nav__menu {
  @include mediumScreen {
    @include flexRowCenterCenter;
    height: 100%;
  }
}
</style>
