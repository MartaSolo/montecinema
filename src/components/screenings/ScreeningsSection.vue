<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
import { useSeancesStore } from "@/stores/seances";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BaseSelect from "@/components/global/BaseSelect.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import ScreeningsCalendar from "@/components/screenings/ScreeningsCalendar.vue";
import ScreeningMovieCard from "@/components/screenings/ScreeningMovieCard.vue";

export default defineComponent({
  name: "ScreeningsSection",
  components: {
    SectionTitleSecondary,
    SectionContainer,
    ScreeningsCalendar,
    BaseSelect,
    ScreeningMovieCard,
    LoadingData,
    ErrorMessage,
  },
  data() {
    return {
      date: new Date(),
      selected: null,
    };
  },
  computed: {
    ...mapState(useMoviesStore, [
      "movies",
      "moviesIsLoading",
      "moviesError",
      "moviesErrorMessage",
    ]),
    ...mapState(useSeancesStore, [
      "seances",
      "seancesIsLoading",
      "seancesError",
      "seancesErrorMessage",
    ]),
    movieTitles() {
      return this.movies.map((movie) => movie.title);
    },
    selectedMovie() {
      return this.movies.filter((movie) => movie.title === this.selected);
    },
    moviesFilteredByTitle() {
      return !this.selected ? this.movies : this.selectedMovie;
    },
    moviesFilteredByTitleAndDate() {
      const moviesIdFromSeances = this.seances.map((seance) => seance.movie);
      const moviesFilteredBySeances = this.moviesFilteredByTitle.filter(
        (movie) => moviesIdFromSeances.includes(movie.id)
      );
      return moviesFilteredBySeances;
    },
    formattedDate() {
      return this.date.toISOString().substring(0, 10);
    },
  },
  watch: {
    date(newDate, oldDate) {
      if (newDate !== oldDate) {
        this.getSeances(this.formattedDate);
      }
    },
  },
  methods: {
    ...mapActions(useSeancesStore, ["getSeances"]),
    movieSeances(movieId) {
      return this.seances.filter((seance) => seance.movie === movieId);
    },
  },
  mounted() {
    this.getSeances(this.formattedDate);
  },
});
</script>

<template>
  <section class="screenings">
    <SectionContainer class="screenings__container">
      <SectionTitleSecondary
        :title="$t('screenings.title')"
        :subtitle="$d(this.date, 'long')"
      ></SectionTitleSecondary>
      <div class="screenings__filters">
        <ScreeningsCalendar v-model="date" />
        <BaseSelect
          v-model="selected"
          :label="$t('screenings.movies')"
          placeholder="All movies"
          :options="movieTitles"
        ></BaseSelect>
      </div>
      <div class="screenings__movies">
        <LoadingData v-if="moviesIsLoading || seancesIsLoading" />
        <ErrorMessage v-else-if="moviesError || seancesError">{{
          moviesErrorMessage
        }}</ErrorMessage>
        <div v-else class="screenings__movies--cards">
          <ScreeningMovieCard
            v-for="movie in moviesFilteredByTitleAndDate"
            :key="movie.id"
            :movie="movie"
            :movieSeances="movieSeances(movie.id)"
          />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.screenings__container {
  padding: 40px 24px;
  @include mediumScreen {
    padding: 40px;
  }
}

.screenings__filters {
  margin-bottom: 48px;
  @include mediumScreen {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
