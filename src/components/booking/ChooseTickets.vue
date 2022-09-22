<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useReservationStore } from "@/stores/reservation.js";
import BaseButton from "@/components/global/BaseButton.vue";

const reservationStore = useReservationStore();
const { reservedSeats } = storeToRefs(reservationStore);

const ticketTypes = [
  { id: 1, type: "Adult", price: 13, label: "Adult - $13" },
  { id: 2, type: "Student", price: 9, label: "Student - $9" },
  { id: 1, type: "Senior", price: 7, label: "Senior - $7" },
  { id: 1, type: "Child", price: 5, label: "Child - $5" },
];

const reservedSeatsTickets = ref(
  reservedSeats.value.map((reservedSeat) => {
    return { seat: reservedSeat, ticket: null };
  })
);
</script>

<template>
  <section class="tickets">
    <div class="choose__tickets">
      <div v-for="seat in reservedSeats" :key="seat" class="choose__ticket">
        <div class="ticket__seat">
          <div class="ticket__seat-label">Seat</div>
          <div class="ticket__seat-number">
            Row <span class="seat__row">{{ seat.substring(0, 1) }}, </span>Seat
            <span class="seat__number">{{ seat.substring(1) }}</span>
          </div>
        </div>

        <div class="ticket__type">
          <label class="ticket__type-label" for="tickets">Ticket type</label>
          <select
            class="ticket__type-select"
            name="tickets"
            id="tickets"
            v-model="reservedSeatsTickets.value.ticket"
          >
            <option class="ticket__type-option" disabled selected>
              Select ticket
            </option>
            <option
              class="ticket__type-option"
              v-for="ticket in ticketTypes"
              :key="ticket.id"
            >
              {{ ticket.label }}
            </option>
          </select>
        </div>

        <div class="ticket__remove">
          <BaseButton
            class="ticket__remove-btn"
            size="large"
            colorTheme="dark-empty"
            >Remove</BaseButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tickets {
  @include mediumScreen {
    margin-bottom: 41px;
  }
}
.choose__ticket {
  border: 1px solid blue;
  @include mediumScreen {
    display: flex;
  }
}
.ticket__seat {
  margin-bottom: 24px;
  @include mediumScreen {
    width: 152px;
    margin-right: 24px;
  }
}
.ticket__seat-label,
.ticket__type-label {
  font-family: $fontSecondary;
  font-size: 0.9rem;
  font-weight: 700;
  color: $colorRedBittersweet;
  text-transform: uppercase;
  padding-bottom: 12px;
}
.ticket__seat-number {
  font-size: 1rem;
  padding-bottom: 12px;
  background-color: $colorRedWispPink;
  border-radius: 8px;
  padding: 17px 15px;
}
.seat__number,
.seat__row {
  font-weight: 600;
}

.ticket__type {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
.ticket__type-select {
  height: 56px;
  border: 1px solid $colorGreyAthens;
  background-color: $colorGreyAthens;
  margin-bottom: 24px;
  color: $colorGreyTuna;
  font-family: $fontPrimary;
  font-weight: 400;
  @include mediumScreen {
    width: 349px;
  }
}
.ticket__type-option {
  color: $colorGreyAthens;
  font-family: $fontPrimary;
  font-weight: 400;
}
.ticket__remove-btn {
  width: 327px;
  margin: 0 0 64px 0;
  @include mediumScreen {
    width: 147px;
    margin: 28px 0 0 0;
  }
}
</style>
