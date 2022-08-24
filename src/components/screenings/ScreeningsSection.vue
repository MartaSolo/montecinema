<script>
import { defineComponent } from "vue";
import { getAllSeances } from "@/api/services/Seances";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import ScreeningsCalendar from "@/components/screenings/ScreeningsCalendar.vue";
import BaseSelect from "@/components/global/BaseSelect.vue";

export default defineComponent({
  name: "ScreeningsSection",
  components: {
    SectionTitleSecondary,
    SectionContainer,
    ScreeningsCalendar,
    BaseSelect,
  },
  props: {
    moviesIsLoading: {
      type: Boolean,
    },
    moviesErrorMessage: {
      type: String,
    },
    movies: {
      type: Array,
    },
  },
  data() {
    return {
      date: new Date(),
      selected: null,
      seancesIsLoading: true,
      seancesErrorMessage: null,
      seances: [],
    };
  },
  methods: {
    async getSeances() {
      this.seancesIsLoading = true;
      try {
        const respData = await getAllSeances();
        this.seances = respData.data;
      } catch (error) {
        this.seancesErrorMessage = error.message;
      } finally {
        this.seancesIsLoading = false;
      }
    },
  },
  mounted() {
    this.getSeances();
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
      <div class="screenings__filters">
        <ScreeningsCalendar v-model="date" />
        <BaseSelect
          label="Movies"
          placeholder="All movies"
          v-model="selected"
        ></BaseSelect>
      </div>
      <div class="screenings__movies"></div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped></style>
