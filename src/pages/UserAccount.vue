<script setup lang="ts">
import { ref, onBeforeMount, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import { useReservationStore } from "@/stores/reservation.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import AccountTabs from "@/components/user/AccountTabs.vue";
import PersonalDetails from "@/components/user/PersonalDetails.vue";
import Reservations from "@/components/user/Reservations.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import { useMeta } from "vue-meta";

const authStore = useAuthStore();
const {
  currentUser,
  currentUserIsLoading,
  currentUserError,
  currentUserErrorMessage,
} = storeToRefs(authStore);

const reservationStore = useReservationStore();

const activeTab = ref("personalDetails");

const userEmail = computed(() => {
  return currentUser.value?.email;
});

const changeTab = (tab: string) => {
  activeTab.value = tab;
};
const { meta } = useMeta({ title: "Montecinema | User account" });

watch(userEmail, (newValue, oldValue) => {
  reservationStore.getUserReservations();
});

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
