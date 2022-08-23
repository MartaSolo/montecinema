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
      date: new Date(),
    };
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
      <ScreeningsCalendar v-model="date" />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
