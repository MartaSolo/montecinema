<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default defineComponent({
  name: "ScreeningsCalendar",
  components: {
    BaseButton,
    Datepicker,
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      date: new Date(),
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  methods: {
    setDate(number) {
      const today = new Date();
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + number - 1);
      return nextDay;
    },
    setDay(number) {
      const nextDay = this.setDate(number);
      this.date = nextDay;
    },
    setWeekDay(number) {
      if (number === 1) {
        return "Today";
      } else {
        const nextDay = this.setDate(number);
        const weekDay = nextDay.toDateString().substring(0, 3);
        return weekDay;
      }
    },
    setActiveClass(number) {
      const nextDay = this.setDate(number);
      const nextDayString = nextDay.toDateString().substring(0, 20);
      const stateDateString = this.date.toDateString().substring(0, 20);
      if (nextDayString === stateDateString) {
        return "active";
      } else {
        return "";
      }
    },
    handleClick(number) {
      this.setDay(number);
      this.passButtonDate();
    },
    passButtonDate() {
      this.$emit("update:modelValue", this.date);
    },
    handleDatepickerDate(modelData) {
      this.date = modelData;
      this.$emit("update:modelValue", this.date);
    },
  },
});
</script>

<template>
  <div class="screenings__datepicker">
    <label class="screenings__datepicker-label" for="datepicker">Date</label>
    <div class="screenings__datepicker-buttons">
      <BaseButton
        v-for="n in 6"
        :key="n"
        id="datepicker"
        class="screenings__datepicker-button"
        :class="setActiveClass(n)"
        colorTheme="dark-empty"
        size="small"
        @click="handleClick(n)"
        >{{ setWeekDay(n) }}</BaseButton
      >
      <Datepicker
        :value="date"
        @update:modelValue="handleDatepickerDate"
        name="datepicker"
        menuClassName="screenings__datepicker-wrapper"
        inputClassName="screenings__datepicker-input"
        calendarClassName="screenings__datepicker-calendar"
        calendarCellClassName="screenings__datepicker-day"
        format="yyyy-MM-dd"
        hideInputIcon
        :enableTimePicker="false"
        :dayNames="dayNames"
      >
        <template #trigger
          ><div class="screenings__datepicker-icon"></div
        ></template>
      </Datepicker>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screenings__datepicker {
  border: 1px solid blue;
}
.screenings__datepicker-label {
  text-transform: uppercase;
  font-family: $fontSecondary;
  font-size: 0.9rem;
  font-weight: 700;
  color: $colorRedBittersweet;
}

.screenings__datepicker-buttons {
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
}

.button.screenings__datepicker-button {
  margin: 0 10px 10px 0;
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    display: none;
  }
  @include mediumScreen {
    height: 56px;
    padding: 19px 40px;
    font-size: 1.1rem;
    &:nth-child(4) {
      display: flex;
    }
  }
  @include largeScreen {
    &:nth-child(5),
    &:nth-child(6) {
      display: flex;
    }
  }
}

.button.screenings__datepicker-button.active {
  background-color: $colorGreyTuna;
  color: $colorWhiteSnow;
}

.screenings__datepicker-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid $colorGreyTuna;
  background-image: url("@/assets/images/calendar.svg");
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: center;
  cursor: pointer;
  @include mediumScreen {
    width: 56px;
    height: 56px;
    background-size: 35px 35px;
  }
  &:hover {
    border: 2px solid $colorGreyJumbo;
  }
}
</style>

<style lang="scss">
.dp__calendar_header_item {
  font-family: $fontPrimary;
  font-size: 0.9rem;
  font-weight: 400;
  color: $colorGreyBombay;
}
.screenings__datepicker-day {
  font-family: $fontPrimary;
  font-size: 1rem;
  font-weight: 400;
  color: $colorGreyTuna;
  &.dp__today {
    background-color: $colorGreyIron;
    border-radius: 50%;
    border: 1px solid $colorGreyIron;
  }
  &.dp__active_date {
    background-color: $colorRedBittersweet;
    border-radius: 50%;
    color: $colorWhiteSnow;
  }
}
.dp__action {
  font-weight: 400;
  font-family: $fontPrimary;
  font-size: 0.9rem;
  &.dp__cancel {
    color: $colorGreyBombay;
    &:hover {
      color: $colorGreyJumbo;
    }
  }
  &.dp__select {
    color: $colorRedBittersweet;
    &:hover {
      color: $colorRedCherry;
    }
  }
}
.dp__selection_preview {
  color: $colorRedBittersweet;
}
</style>
