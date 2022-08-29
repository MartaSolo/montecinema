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
  <router-link class="header__logo" :to="{ name: 'HomePage' }"
    ><LogoMonte
  /></router-link>
</template>

<style lang="scss" scoped>
.header__logo {
  display: block;
  width: 183px;
  height: 38px;
}
</style>
