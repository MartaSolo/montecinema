<script setup lang="ts">
import BaseButton from "@/components/global/BaseButton.vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import router from "@/router";

const authStore = useAuthStore();
const { isLoggedIn, isUserLoggedIn } = storeToRefs(authStore);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onLogout = () => {
  authStore.logout();
  router.push({ name: "HomePage" });
};
</script>

<template>
  <div class="nav__links" @click="$emit('click', $event)">
    <BaseButton
      v-if="isLoggedIn"
      class="logout__btn"
      size="large"
      colorTheme="light-empty"
      @click="onLogout"
      >{{ $t("redirect.logout") }}</BaseButton
    >
    <BaseButton
      v-if="isUserLoggedIn"
      class="account__link"
      :to="{ name: 'UserAccount' }"
      size="large"
      colorTheme="light-filled"
      >{{ $t("redirect.account") }}</BaseButton
    >
    <BaseButton
      v-if="!isLoggedIn"
      class="register__link"
      :to="{ name: 'UserRegister' }"
      size="large"
      colorTheme="accent-text"
      >{{ $t("redirect.register") }}</BaseButton
    >
    <BaseButton
      v-if="!isLoggedIn"
      class="login__link"
      :to="{ name: 'UserLogIn' }"
      size="large"
      colorTheme="accent-filled"
      >{{ $t("redirect.login") }}</BaseButton
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
.login__link,
.logout__btn {
  width: 100%;
  border-radius: 0;
  border: none;
  @include mediumScreen {
    border-radius: 64px;
    height: 40px;
    width: 114px;
    height: 40px;
    font-size: 1rem;
    padding: 12px 32px;
  }
}
.account__link {
  border: 2px solid $colorRedFairPink;
  @include mediumScreen {
    width: 145px;
    padding: 12px 22px;
  }
}

.login__link,
.account__link {
  @include mediumScreen {
    margin-left: 16px;
  }
}

.login__link {
  @include mediumScreen {
    border: 2px solid $colorRedCherry;
  }
}
.logout__btn,
.register__link {
  @include mediumScreen {
    border: 2px solid $colorWhiteSnow;
  }
}
</style>
