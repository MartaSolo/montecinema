<script setup>
import { ref } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";

const activeLang = ref("EN");

const changeLang = (lang) => {
  activeLang.value = lang;
};
</script>

<template>
  <div class="language__wrapper">
    <BaseButton
      v-if="activeLang === 'PL'"
      class="language"
      size="tiny"
      colorTheme="dark-empty"
      @click="changeLang('EN')"
      >EN</BaseButton
    >
    <BaseButton
      v-if="activeLang === 'EN'"
      class="language"
      size="tiny"
      colorTheme="dark-empty"
      @click="changeLang('PL')"
      >PL</BaseButton
    >
  </div>
</template>

<style lang="scss" scoped>
.language__wrapper {
  display: flex;
  justify-content: flex-end;
  @include mediumScreen {
    padding-bottom: 8px;
  }
}
.button.language {
  font-size: 0.8rem;
  padding: 3px 11px;
  height: 21px;
}
</style>
