<script setup lang="ts">
import { Ref, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useReservationStore } from "@/stores/reservation.js";
import { useAuthStore } from "@/stores/auth.js";
import BaseButton from "@/components/global/BaseButton.vue";
import BaseCheckbox from "@/components/global/BaseCheckbox.vue";

export interface ReservedSeatTicket {
  seat: string;
  ticket_type_id: number;
}

// hardcoded data cuz there is no tickets endpoint in the API
const ticketTypes = [
  { id: 1, type: "Adult", price: 13, label: "Adult - $13" },
  { id: 2, type: "Student", price: 9, label: "Student - $9" },
  { id: 3, type: "Senior", price: 7, label: "Senior - $7" },
  { id: 4, type: "Child", price: 5, label: "Child - $5" },
];

const reservationStore = useReservationStore();
const { reservedSeats } = storeToRefs(reservationStore);
const authStore = useAuthStore();
const { isUserLoggedIn } = storeToRefs(authStore);

const router = useRouter();

const reservedSeatsTickets: Ref<ReservedSeatTicket[]> = ref(
  reservedSeats.value.map((reservedSeat) => {
    return { seat: reservedSeat, ticket_type_id: 1 };
  })
);

const terms: Ref<boolean> = ref(false);

const emit = defineEmits<{ (e: "onStepChange", step: number): void }>();

const removeSeat = (seat: string) => {
  reservationStore.removeSelectedSeat(seat);
  const filteredReservedSeatsTickets = reservedSeatsTickets.value.filter(
    (reservedSeat) => seat !== reservedSeat.seat
  );
  reservedSeatsTickets.value = filteredReservedSeatsTickets;
};

const ticketsPrice = () => {
  const merged = reservedSeatsTickets.value.map((ticket) => ({
    ...ticket,
    ...ticketTypes.find(
      (ticketType) => ticketType.id === ticket.ticket_type_id
    ),
  }));
  const price = merged.reduce((acc, obj) => acc + obj.price, 0);
  return price;
};

const changeStep = (step: number) => {
  emit("onStepChange", step);
};

const bookTickets = () => {
  if (isUserLoggedIn.value) {
    reservationStore.reserveSeance(reservedSeatsTickets.value);
    changeStep(3);
  }
  if (!isUserLoggedIn.value) {
    router.push({ name: "UserLogIn" });
  }
};
</script>

<template>
  <section class="tickets">
    <div class="choose__tickets">
      <div
        v-for="(seat, index) in reservedSeats"
        :key="seat"
        class="choose__ticket"
      >
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
            v-model="reservedSeatsTickets[index].ticket_type_id"
          >
            <option
              class="ticket__type-option"
              v-for="ticket in ticketTypes"
              :key="ticket.id"
              :value="ticket.id"
            >
              {{ ticket.label }}
            </option>
          </select>
        </div>

        <BaseButton
          class="ticket__remove-btn"
          size="large"
          colorTheme="dark-empty"
          @click="removeSeat(seat)"
          >Remove</BaseButton
        >
      </div>
      <BaseCheckbox
        class="tickets__terms"
        :class="{ checked: terms }"
        name="terms"
        label="I accept"
        v-model="terms"
        ><a href="#" class="terms__link">Terms & Conditions</a></BaseCheckbox
      >
    </div>

    <div class="tickets__actions">
      <BaseButton
        class="tickets__back-btn"
        size="large"
        colorTheme="dark-empty"
        @click="changeStep(1)"
        >Go back</BaseButton
      >
      <BaseButton
        class="tickets__book-btn"
        size="large"
        colorTheme="accent-filled"
        :disabled="!terms"
        @click="bookTickets"
        >Book tickets - ${{ ticketsPrice() }}</BaseButton
      >
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

.ticket__remove-btn {
  width: 327px;
  margin: 0 0 64px 0;
  @include mediumScreen {
    width: 147px;
    margin: 28px 0 0 0;
  }
}

.tickets__terms {
  padding: 65px 0;
}
.terms__link {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: $colorGreyCharade;
  cursor: pointer;
  text-decoration: underline;
}

.tickets__actions {
  display: flex;
  flex-direction: column;
  @include mediumScreen {
    flex-direction: row;
    justify-content: space-between;
  }
}

.tickets__back-btn {
  margin-bottom: 16px;
  width: 327px;
  @include mediumScreen {
    margin-bottom: 0;
    width: 158px;
  }
}

.tickets__book-btn {
  width: 327px;
  @include mediumScreen {
    width: 280px;
  }
}
</style>
