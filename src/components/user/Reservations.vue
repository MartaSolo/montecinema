<script setup lang="ts">
import { useReservationStore } from "@/stores/reservation.js";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";

const reservationStore = useReservationStore();
const { userReservations } = storeToRefs(reservationStore);

const today = ref(new Date());

const upcoming = computed(() => {
  return userReservations.value?.filter((reservation) => {
    let seanceDate = new Date(reservation.seance_datetime);
    seanceDate > today.value;
    // new Date(reservation.seance_datetime) > today.value;
    // reservation.seance_datetime > today.value;
  });
});
</script>

<template>
  <div>Reservations component</div>
</template>

<style lang="scss" scoped></style>
