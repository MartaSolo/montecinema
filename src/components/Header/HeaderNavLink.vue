<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderNavLink",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <router-link class="nav__link">{{ text }}</router-link>
</template>

<style lang="scss" scoped>
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $fontPrimary;
  font-weight: 400;
  font-size: 1.1rem;
  color: $colorGreyJumbo;
  height: 58px;
  border-bottom: 2px solid $colorRedBittersweet;
  background-color: $colorWhiteSnow;
  &:first-child {
    border-top: 2px solid $colorRedBittersweet;
  }
  @include mediumScreen {
    border-bottom: 2px solid $colorWhiteSnow;
    height: 100%;
    width: 114px;
    &:first-child {
      border-top: none;
    }
    &:hover {
      color: $colorGreyAbbey;
      border-bottom: 2px solid $colorRedBittersweet;
    }
  }
}
</style>
