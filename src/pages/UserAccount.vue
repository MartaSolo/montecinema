<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import AccountTabs from "@/components/user/AccountTabs.vue";
import PersonalDetails from "@/components/user/PersonalDetails.vue";
import Reservations from "@/components/user/Reservations.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

const authStore = useAuthStore();
const { currentUserIsLoading, currentUserError, currentUserErrorMessage } =
  storeToRefs(authStore);

const activeTab = ref("personalDetails");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};

onBeforeMount(() => {
  authStore.getCurrentUser();
});
</script>

<template>
  <section class="account">
    <SectionContainer class="account__container">
      <AccountTabs :activeTab="activeTab" @setActiveTab="changeTab" />
      <LoadingData v-if="currentUserIsLoading" />
      <ErrorMessage v-else-if="currentUserError">{{
        currentUserErrorMessage
      }}</ErrorMessage>
      <div v-else class="account__content">
        <PersonalDetails v-if="activeTab === 'personalDetails'" />
        <Reservations v-if="activeTab === 'reservations'" />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.account__content {
  margin-top: 56px;
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
  @include mediumScreen {
    justify-content: flex-start;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
    padding: 64px;
    margin: 64px 0 64px 0;
  }
}
</style>
