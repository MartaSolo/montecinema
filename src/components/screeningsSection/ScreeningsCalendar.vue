<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/global/BaseButton.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default defineComponent({
  name: "ScreeningsCalendar",
  components: { BaseButton, Datepicker },
  data() {
    return {
      range: null,
      presetRanges: [
        {
          label: "Full month",
          range: [
            new Date(),
            new Date(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              new Date().getUTCDate()
            ),
          ],
        },
      ],
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  methods: {
    setDay(number) {
      console.log("this.range", this.range);
      const today = new Date();
      // console.log("today", today);
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + number - 1);
      // console.log("nextDay", nextDay);
      return nextDay;
    },
    setDaysRange(number) {
      const nextDay = this.setDay(number);
      console.log("nextDay to range", nextDay);
      this.range = [nextDay, nextDay];
    },
    setDayWeekday(number) {
      if (number === 1) {
        return "Today";
      } else {
        const nextDay = this.setDay(number);
        return nextDay.toDateString().substring(0, 3);
      }
    },
    passDateRange() {
      this.$emit("changeDates", this.range);
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
        colorTheme="dark-empty"
        size="small"
        @click="setDaysRange(n)"
        >{{ setDayWeekday(n) }}</BaseButton
      >
      <Datepicker
        v-model.value="range"
        name="datepicker"
        menuClassName="screenings__datepicker-wrapper"
        inputClassName="screenings__datepicker-input"
        calendarClassName="screenings__datepicker-calendar"
        calendarCellClassName="screenings__datepicker-day"
        range
        multiCalendars
        autoApply
        format="yyyy-MM-dd"
        hideInputIcon
        :enableTimePicker="false"
        :presetRanges="presetRanges"
        :dayNames="dayNames"
        :minDate="new Date()"
        @change="passDateRange"
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
  display: block;
  padding: 32px 0 12px 0;
}

.screenings__datepicker-buttons {
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
}

.button.screenings__datepicker-button {
  margin: 0 10px 10px 0;
  &:first-child {
    background-color: $colorGreyTuna;
    color: $colorWhiteSnow;
  }
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
.screenings__datepicker-wrapper {
  .screenings__datepicker-calendar {
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
      &.dp__range_start,
      &.dp__range_end {
        background-color: $colorRedBittersweet;
        border-radius: 50%;
        color: $colorWhiteSnow;
      }
      &.dp__range_between {
        background-color: $colorWhiteSnow;
        border: 1px solid $colorWhiteSnow;
        color: $colorRedBittersweet;
      }
    }
  }
}
</style>
