<script>
import { defineComponent } from "vue";
import HeaderNavLink from "@/components/header/HeaderNavLink.vue";

export default defineComponent({
  name: "HeaderNavMenu",
  components: {
    HeaderNavLink,
  },
});
</script>

<template>
  <div class="nav__menu">
    <HeaderNavLink href="#" text="Movies" />
    <HeaderNavLink href="#" text="Screenings" />
    <HeaderNavLink href="#" text="Contact us" />
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
