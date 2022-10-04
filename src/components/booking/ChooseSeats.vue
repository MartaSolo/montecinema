<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import BaseButton from "@/components/global/BaseButton.vue";

interface ChosenSeat {
  seat: string;
  row: string;
  seatNumber: string;
  available: boolean;
}

const emit = defineEmits<{ (e: "onStepChange", step: number): void }>();

const reservationStore = useReservationStore();
const { getHallPlan, reservedSeats } = storeToRefs(reservationStore);

const toggleReservedSeat = (chosenSeat: ChosenSeat) => {
  if (!chosenSeat.available) return;
  if (!reservedSeats.value.includes(chosenSeat.seat)) {
    reservedSeats.value.push(chosenSeat.seat);
  } else {
    const filteredSeats = reservedSeats.value.filter(
      (seat) => seat !== chosenSeat.seat
    );
    reservedSeats.value = filteredSeats;
  }
};

const getSeatClasses = (seat: ChosenSeat) => {
  return {
    taken: !seat.available,
    reserved: reservedSeats.value.includes(seat.seat),
  };
};

const isButtonDisabled = computed(() => {
  return reservedSeats.value.length === 0;
});

const changeStep = (step: number) => {
  emit("onStepChange", step);
  reservationStore.sortReservedSeats(reservedSeats.value);
};
</script>

<template>
  <section class="choose__seats">
    <div class="choose__seats-hall">
      <div v-for="(row, i) in getHallPlan" :key="i" class="hall__row">
        <div class="hall__row-letter">{{ row[0].row }}</div>
        <div
          v-for="seat in row"
          :key="seat.seat"
          class="hall__seat"
          :class="getSeatClasses(seat)"
          @click="toggleReservedSeat(seat)"
        >
          {{ seat.seatNumber }}
        </div>
        <div class="hall__row-letter">{{ row[0].row }}</div>
      </div>
    </div>
    <div class="choose__seats-action">
      <BaseButton
        size="large"
        color-theme="light-empty"
        class="hall__action-btn"
        :disabled="isButtonDisabled"
        @click="changeStep(2)"
        >Choose seats</BaseButton
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.choose__seats-hall {
  padding: 40px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  border-radius: 8px;
  margin-bottom: 64px;
  overflow: auto;
  white-space: nowrap;
}
.hall__row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}
.hall__seat,
.hall__row-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  background-color: $colorRedCosmos;
  font-family: $fontSecondary;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}
.hall__seat.taken {
  background-color: $colorGreyJumbo;
}
.hall__seat.reserved {
  background-color: $colorRedCherry;
}
.hall__row-letter {
  background-color: $colorWhiteSnow;
  cursor: default;
  padding: 0 40px 0 40px;
}
.choose__seats-action {
  display: flex;
  justify-content: flex-end;
}
.hall__action-btn {
  margin-bottom: 64px;
}
</style>
