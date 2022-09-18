<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import BaseButton from "@/components/global/BaseButton.vue";

const reservationStore = useReservationStore();
const { getAllSeats, getHallPlan } = storeToRefs(reservationStore);
</script>

<template>
  <div class="hall2d"></div>
  <div class="hall">
    <div v-for="(row, i) in getHallPlan" :key="i" class="hall__row">
      <div class="hall__row-letter">{{ row[0].row }}</div>
      <div
        v-for="seat in row"
        :key="seat.seat"
        class="hall__seat"
        :class="{ taken: !seat.available }"
      >
        {{ seat.seatNumber }}
      </div>
      <div class="hall__row-letter">{{ row[0].row }}</div>
    </div>
  </div>
  <div class="hall__action">
    <BaseButton size="large" color-theme="light-empty" class="hall__action-btn"
      >Choose seats</BaseButton
    >
  </div>
</template>

<style lang="scss" scoped>
.hall {
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
.hall__row-letter {
  background-color: $colorWhiteSnow;
  cursor: default;
  padding: 0 40px 0 40px;
}
.hall__action {
  display: flex;
  justify-content: flex-end;
}
.hall__action-btn {
  margin-bottom: 64px;
}
</style>
