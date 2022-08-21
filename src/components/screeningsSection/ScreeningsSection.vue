<script>
import { defineComponent } from "vue";
import SectionTitleSecondary from "../global/SectionTitleSecondary.vue";
import SectionContainer from "../global/SectionContainer.vue";
import ScreeningsCalendar from "./ScreeningsCalendar.vue";

export default defineComponent({
  name: "ScreeningsSection",
  components: { SectionTitleSecondary, SectionContainer, ScreeningsCalendar },
  data() {
    return {
      dateRange: [new Date(), new Date()],
    };
  },
  methods: {
    changeRangeDates(range) {
      this.dateRange = range;
      console.log(this.dateRange);
    },
  },
});
</script>

<template>
  <section class="screenings">
    <SectionContainer class="screenings__container">
      <SectionTitleSecondary
        title="Screenings:"
        subtitle="Friday 19/08/2022"
      ></SectionTitleSecondary>
      <ScreeningsCalendar @changeDates="changeRangeDates" />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
