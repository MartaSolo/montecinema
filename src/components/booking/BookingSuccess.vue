<script setup lang="ts">
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { formattedDateAndTime } from "@/utils/formattedDate.js";
import { useReservationStore } from "@/stores/reservation.js";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/LoadingData.vue";
import BookingSuccessTitle from "@/components/booking/BookingSuccessTitle.vue";
import BaseButton from "@/components/global/BaseButton.vue";

const reservationStore = useReservationStore();
const {
  reservedSeance,
  reservation,
  reservationIsLoading,
  reservationError,
  getReservationErrorMessage,
} = storeToRefs(reservationStore);

const reservationId = computed(() => {
  return reservedSeance.value?.id;
});

const reservationData = () => {
  reservationStore.retrieveReservation();
};

watch(reservationId, (newValue, oldValue) => {
  reservationData();
});

const ticketsNumber = computed(() => {
  return reservation.value?.tickets.length;
});

const subtitle = () => {
  if (ticketsNumber.value === 1) {
    return `You have booked ${ticketsNumber.value} ticket`;
  } else {
    return `You have booked ${ticketsNumber.value} tickets`;
  }
};
</script>

<template>
  <section class="success">
    <LoadingData v-if="reservationIsLoading" />
    <ErrorMessage v-else-if="reservationError">{{
      getReservationErrorMessage
    }}</ErrorMessage>
    <div v-else class="success__reservation">
      <BookingSuccessTitle :subtitle="subtitle()" />
      <div
        v-for="ticket in reservation?.tickets"
        :key="ticket.id"
        class="reservation__details"
      >
        <div class="reservation__movie">
          <div class="reservation__movie-title">Movie</div>
          <div class="reservation__movie-content">
            {{ reservation?.movie_title }}
          </div>
        </div>
        <div class="reservation__seat">
          <div class="reservation__seat-title">Seat</div>
          <div class="reservation__seat-content">
            Row {{ ticket.seat.slice(0, 1) }}, Seat {{ ticket.seat.slice(1) }}
          </div>
        </div>
        <div class="reservation__time">
          <div class="reservation__time-title">Time</div>
          <div class="reservation__time-content">
            {{ formattedDateAndTime(reservation?.seance_datetime) }}
          </div>
        </div>
        <div class="reservation__ticket">
          <div class="reservation__ticket-title">Ticket type</div>
          <div class="reservation__ticket-content">
            {{ ticket.type }} - ${{ ticket.price }}
          </div>
        </div>
      </div>
      <BaseButton
        class="success__button"
        size="large"
        colorTheme="accent-filled"
        :to="{ name: 'HomePage' }"
        >Go to homepage</BaseButton
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.success__reservation {
  position: relative;
}
.reservation__details {
  margin-bottom: 36px;
  @include mediumScreen {
    margin-bottom: 12px;
    display: flex;
    gap: 50px;
  }
}

.reservation__movie-title,
.reservation__seat-title,
.reservation__time-title,
.reservation__ticket-title {
  font-family: $fontSecondary;
  font-weight: 700;
  font-size: 0.8rem;
  color: $colorRedBittersweet;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.reservation__movie-content,
.reservation__seat-content,
.reservation__time-content,
.reservation__ticket-content {
  font-weight: 400;
  font-size: 1rem;
  color: $colorGreyCharade;
  margin-bottom: 12px;
}

.success__button {
  width: 327px;
  margin: 52px 0 64px 0;
  @include mediumScreen {
    width: 235px;
    position: absolute;
    right: 0;
  }
}
</style>
