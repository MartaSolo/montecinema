<script setup lang="ts">
import { ref } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import AccountTabs from "@/components/user/AccountTabs.vue";

const activeTab = ref("personalDetails");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <section class="account">
    <SectionContainer class="account__container">
      <AccountTabs :activeTab="activeTab" @setActiveTab="changeTab" />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
