<script>
import { defineComponent } from "vue";
import HeaderNavLink from "@/components/header/HeaderNavLink.vue";

export default defineComponent({
  name: "HeaderNavMenu",
  components: {
    HeaderNavLink,
  },
  emits: ["click"],
});
</script>

<template>
  <div class="nav__menu" @click="$emit('click', $event)">
    <HeaderNavLink
      active-class="nav__link-active"
      :to="{ name: 'AllMovies' }"
      text="Movies"
    />
    <HeaderNavLink
      active-class="nav__link-active"
      :to="{ name: 'AllScreenings' }"
      text="Screenings"
    />
    <HeaderNavLink
      active-class="nav__link-active"
      :to="{ name: 'ContactUs' }"
      text="Contact us"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav__menu {
  @include mediumScreen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
.nav__link-active {
  border-bottom: 2px solid $colorRedCherry;
}
</style>
