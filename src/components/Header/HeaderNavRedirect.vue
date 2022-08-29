<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";

export default defineComponent({
  name: "HeaderNavRedirect",
  components: {
    BaseButton,
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
    <BaseButton
      v-if="userLogged"
      class="account__link"
      :to="{ name: 'UserAccount' }"
      size="large"
      colorTheme="light-filled"
      >My Account</BaseButton
    >
    <BaseButton
      v-if="!userLogged"
      class="register__link"
      :to="{ name: 'UserRegister' }"
      size="large"
      colorTheme="accent-text"
      >Register</BaseButton
    >
    <BaseButton
      v-if="!userLogged"
      class="login__link"
      :to="{ name: 'UserLogIn' }"
      size="large"
      colorTheme="accent-filled"
      >Login</BaseButton
    >
  </div>
</template>

<style lang="scss" scoped>
.nav__links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include mediumScreen {
    flex-direction: row;
  }
}
.account__link,
.register__link,
.login__link {
  width: 331px;
  @include mediumScreen {
    height: 40px;
    width: 114px;
    height: 40px;
    font-size: 1rem;
    padding: 12px 32px;
  }
}
.account__link {
  @include mediumScreen {
    width: 145px;
    padding: 12px 22px;
  }
}

.login__link {
  @include mediumScreen {
    margin-left: 16px;
  }
}
</style>
