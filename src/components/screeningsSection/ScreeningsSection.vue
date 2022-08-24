<script>
import { defineComponent } from "vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import ScreeningsCalendar from "@/components/screeningsSection/ScreeningsCalendar.vue";
import BaseSelect from "@/components/global/BaseSelect.vue";

export default defineComponent({
  name: "ScreeningsSection",
  components: {
    SectionTitleSecondary,
    SectionContainer,
    ScreeningsCalendar,
    BaseSelect,
  },
  data() {
    return {
      date: new Date(),
      selected: null,
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
      <div>
        <ScreeningsCalendar v-model="date" />
        <BaseSelect
          label="Movies"
          placeholder="All movies"
          v-model="selected"
        ></BaseSelect>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
