<script>
import { defineComponent } from "vue";
import LogoMonte from "@/assets/images/logo_montecinema.svg";

export default defineComponent({
  name: "HeaderLogo",
  components: {
    LogoMonte,
  },
});
</script>

<template>
  <a class="header__logo" href="#"><LogoMonte /></a>
</template>

<style lang="scss" scoped>
.header__logo {
  display: block;
  width: 183px;
  height: 38px;
}
</style>
