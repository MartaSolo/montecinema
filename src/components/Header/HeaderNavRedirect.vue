<script>
import { defineComponent } from "vue";
import LinkBasic from "@/components/Global/LinkBasic.vue";

export default defineComponent({
  name: "HeaderNavRedirect",
  data() {
    return {
      // userLogged: true,
      userLogged: false,
    };
  },
  components: {
    LinkBasic,
  },
});
</script>

<template>
  <div class="nav__links">
    <LinkBasic
      v-if="userLogged"
      class="account"
      url="#"
      text="My Account"
      colorTheme="light-filled"
    />
    <LinkBasic
      v-if="!userLogged"
      class="register"
      url="#"
      text="Register"
      colorTheme="accent-text"
    />
    <LinkBasic
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
