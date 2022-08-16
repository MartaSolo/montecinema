<script>
import { defineComponent } from "vue";
import BaseLink from "@/components/global/BaseLink.vue";

export default defineComponent({
  name: "HeaderNavRedirect",
  components: {
    BaseLink,
  },
  data() {
    return {
      // userLogged: true,
      userLogged: false,
    };
  },
});
</script>

<template>
  <div class="nav__links">
    <BaseLink
      v-if="userLogged"
      class="account"
      href="#"
      colorTheme="light-filled"
      >My Account</BaseLink
    >
    <BaseLink
      v-if="!userLogged"
      class="register"
      href="#"
      text="Register"
      colorTheme="accent-text"
      >Register</BaseLink
    >
    <BaseLink
      v-if="!userLogged"
      class="login"
      href="#"
      colorTheme="accent-filled"
      >Login</BaseLink
    >
  </div>
</template>

<style lang="scss" scoped>
.nav__links {
  @include flexColumnCenterCenter;
  @include mediumScreen {
    flex-direction: row;
  }
}
.link.register,
.link.login,
.link.account {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    @include buttonMedium;
  }
}

.link.login {
  @include mediumScreen {
    margin-left: 1rem;
  }
}
.link.account {
  @include mediumScreen {
    width: 165px;
  }
}
</style>
