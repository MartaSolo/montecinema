<script>
import { defineComponent } from "vue";
import LogoMonte from "../../assets/images/logo_montecinema.svg";

export default defineComponent({
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
  border: 1px solid black;
  width: 183px;
  height: 38px;
}
</style>
