<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BookTicketsSteps from "@/components/booking/BookTicketsSteps.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import ScreeningMovieCard from "@/components/screenings/ScreeningMovieCard.vue";
import { useMeta } from "vue-meta";

const { meta } = useMeta({ title: "Montecinema | Book tickets" });

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
  seanceErrorMessage,
  movie,
  movieIsLoading,
  movieError,
} = storeToRefs(reservationStore);

const sectionTitle = () => {
  return step.value === 1 ? "Choose your seats" : "Choose tickets";
};

onMounted(() => {
  reservationStore.getSeance(props.movieSeanceId);
});
</script>

<template>
  <section class="booking">
    <SectionContainer class="booking__container">
      <div v-if="step !== 3" class="booking__step-info">
        <BookTicketsSteps :step="step" />
        <SectionTitleSecondary class="booking__title" :title="sectionTitle()" />
        <LoadingData v-if="seanceIsLoading || movieIsLoading" />
        <ErrorMessage v-else-if="seanceError || movieError">{{
          seanceErrorMessage
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
        <router-view @onStepChange="handleStep($event)" />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
