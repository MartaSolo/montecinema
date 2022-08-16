<script>
import { defineComponent } from "vue";
import BaseLink from "@/components/Global/BaseLink.vue";

export default defineComponent({
  name: "HeaderNavRedirect",
  data() {
    return {
      // userLogged: true,
      userLogged: false,
    };
  },
  components: {
    BaseLink,
  },
});
</script>

<template>
  <div class="nav__links">
    <BaseLink
      v-if="userLogged"
      class="account"
      url="#"
      text="My Account"
      colorTheme="light-filled"
    />
    <BaseLink
      v-if="!userLogged"
      class="register"
      url="#"
      text="Register"
      colorTheme="accent-text"
    />
    <BaseLink
      v-if="!userLogged"
      class="login"
      url="#"
      text="Login"
      colorTheme="accent-filled"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav__links {
  @include flexColumnCenterCenter;
  @include mediumScreen {
    flex-direction: row;
  }
}
</style>
