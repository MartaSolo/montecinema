<script lang="ts">
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BookTicketsSteps from "@/components/global/BookTicketsSteps.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";

export default defineComponent({
  name: "BookTicket",
  components: { SectionContainer, BookTicketsSteps, SectionTitleSecondary },
  props: {
    movieSeanceId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    handleStep(step: number) {
      this.step = step;
    },
  },
});
</script>

<template>
  <section class="booking">
    <SectionContainer class="booking__container">
      <BookTicketsSteps :step="step" @onStepChange="handleStep" />
      <SectionTitleSecondary class="booking__title" title="Choose your seats" />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
