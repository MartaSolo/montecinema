<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BookTicketsSteps from "@/components/booking/BookTicketsSteps.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import ScreeningMovieCard from "@/components/screenings/ScreeningMovieCard.vue";
import ChooseSeats from "@/components/booking/ChooseSeats.vue";
import ChooseTickets from "@/components/booking/ChooseTickets.vue";
import BookingSuccess from "@/components/booking/BookingSuccess.vue";

const props = defineProps<{
  movieSeanceId: String;
}>();

const step: Ref<number> = ref(1);

const handleStep = (stepNumber: number) => {
  step.value = stepNumber;
};

const reservationStore = useReservationStore();
const {
  seance,
  seanceIsLoading,
  seanceError,
  getSeanceErrorMessage,
  movie,
  movieIsLoading,
  movieError,
} = storeToRefs(reservationStore);

onMounted(() => {
  reservationStore.getSeance(props.movieSeanceId);
});
</script>

<template>
  <section class="booking">
    <SectionContainer class="booking__container">
      <div v-if="step !== 3" class="booking__step-info">
        <BookTicketsSteps :step="step" />
        <SectionTitleSecondary
          class="booking__title"
          title="Choose your seats"
        />
        <LoadingData v-if="seanceIsLoading || movieIsLoading" />
        <ErrorMessage v-else-if="seanceError || movieError">{{
          getSeanceErrorMessage
        }}</ErrorMessage>
        <div v-else class="booking__movie-card">
          <ScreeningMovieCard
            :key="seance?.id"
            :movie="movie"
            :movieSeance="seance"
          />
        </div>
      </div>
      <div class="booking__step">
        <ChooseSeats v-if="step === 1" @onStepChange="handleStep" />
        <ChooseTickets v-if="step === 2" @onStepChange="handleStep" />
        <BookingSuccess v-if="step === 3" />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
