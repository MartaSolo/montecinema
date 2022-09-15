<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BookTicketsSteps from "@/components/global/BookTicketsSteps.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import ScreeningMovieCard from "@/components/screenings/ScreeningMovieCard.vue";

const props = defineProps<{
  movieSeanceId: String;
}>();

const step = ref(1);

const handleStep = (stepNumber: number) => {
  step.value = stepNumber;
};

const reservationStore = useReservationStore();
const {
  seance,
  seanceIsLoading,
  seanceError,
  getReservationErrorMessage,
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
      <BookTicketsSteps :step="step" @onStepChange="handleStep" />
      <SectionTitleSecondary class="booking__title" title="Choose your seats" />
      <LoadingData v-if="seanceIsLoading || movieIsLoading" />
      <ErrorMessage v-else-if="seanceError || movieError">{{
        getReservationErrorMessage
      }}</ErrorMessage>
      <div v-else class="booking__movie-card">
        <ScreeningMovieCard
          :key="seance?.id"
          :movie="movie"
          :movieSeance="seance"
        />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
