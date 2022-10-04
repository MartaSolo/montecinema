<script setup lang="ts">
const props = withDefaults(
  defineProps<{ title?: string; subtitle?: string }>(),
  {
    title: "Hell Yeah!",
  }
);
</script>

<template>
  <h2 class="success__title">{{ props.title }}</h2>
  <h3 class="success__subtitle">{{ props.subtitle }}</h3>
</template>

<style lang="scss" scoped>
.success__title,
.success__subtitle {
  font-family: $fontTitle;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  @include mediumScreen {
    font-size: 3rem;
    text-align: left;
  }
}
.success__title {
  margin-top: 32px;
}
.success__subtitle {
  color: $colorRedBittersweet;
  margin-bottom: 56px;
}
</style>
