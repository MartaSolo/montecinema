<script setup lang="ts">
import { ref } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import AccountTabs from "@/components/user/AccountTabs.vue";
import PersonalDetails from "@/components/user/PersonalDetails.vue";
import Reservations from "@/components/user/Reservations.vue";

const activeTab = ref("personalDetails");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <section class="account">
    <SectionContainer class="account__container">
      <AccountTabs :activeTab="activeTab" @setActiveTab="changeTab" />
      <PersonalDetails v-if="activeTab === 'personalDetails'" />
      <Reservations v-if="activeTab === 'reservations'" />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
