<script setup lang="ts">
import BaseButton from "@/components/global/BaseButton.vue";

const props = withDefaults(
  defineProps<{
    activeTab: "personalDetails" | "reservations";
  }>(),
  {
    activeTab: "personalDetails",
  }
);

const emit = defineEmits<{
  (e: "setActiveTab", tab: string);
}>();

const changeTab = (tab: string) => {
  emit("setActiveTab", tab);
};
</script>

<template>
  <section class="account-tabs">
    <BaseButton
      class="account__tab"
      :class="{ active: activeTab === 'personalDetails' }"
      @click="changeTab('personalDetails')"
      >Personal Details</BaseButton
    >
    <BaseButton
      class="account__tab"
      :class="{ active: activeTab === 'reservations' }"
      @click="changeTab('reservations')"
      >Reservations</BaseButton
    >
  </section>
</template>

<style lang="scss" scoped>
.account-tabs {
  display: flex;
  justify-content: center;
  @include mediumScreen {
    gap: 64px;
    justify-content: flex-start;
  }
}
.account__tab {
  font-family: $fontTitle;
  font-weight: 600;
  font-size: 1.3rem;
  border: 2px solid $colorWhiteSnow;
  color: $colorGreyBombay;
  &.active {
    color: $colorGreyTuna;
  }
  @include mediumScreen {
    font-size: 3rem;
    padding: 0 5px 0 5px;
    height: 60px;
    border-radius: 12px;
  }
}
</style>
