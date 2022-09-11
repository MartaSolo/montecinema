<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import { useAuthStore } from "@/stores/auth";
import { mapState } from "pinia";

export default defineComponent({
  name: "HeaderNavRedirect",
  components: {
    BaseButton,
  },
  computed: {
    ...mapState(useAuthStore, [
      "isLoggedIn",
      "isUserLoggedIn",
      "isEmployeeLoggedIn",
    ]),
    routeName() {
      return this.isUserLoggedIn
        ? { name: "UserAccount" }
        : { name: "EmployeeAccount" };
    },
  },
});
</script>

<template>
  <div class="nav__links">
    <BaseButton
      v-if="isLoggedIn"
      class="account__link"
      :to="routeName"
      size="large"
      colorTheme="light-filled"
      >My Account</BaseButton
    >
    <BaseButton
      v-if="!isLoggedIn"
      class="register__link"
      :to="{ name: 'UserRegister' }"
      size="large"
      colorTheme="accent-text"
      >Register</BaseButton
    >
    <BaseButton
      v-if="!isLoggedIn"
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
