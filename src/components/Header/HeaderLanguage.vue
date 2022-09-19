<script setup lang="ts">
import BaseButton from "@/components/global/BaseButton.vue";
</script>

<template>
  <div class="language__wrapper">
    <BaseButton
      v-if="$i18n.locale === 'pl'"
      class="language"
      size="tiny"
      colorTheme="dark-empty"
      @click="$i18n.locale = 'en'"
      >EN</BaseButton
    >
    <BaseButton
      v-if="$i18n.locale === 'en'"
      class="language"
      size="tiny"
      colorTheme="dark-empty"
      @click="$i18n.locale = 'pl'"
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
