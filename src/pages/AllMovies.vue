<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useMoviesStore } from "@/stores/movies";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import BaseInput from "@/components/global/BaseInput.vue";
import SearchIcon from "@/assets/images/search.svg";

export default defineComponent({
  name: "AllMovies",
  components: {
    SectionContainer,
    BreadCrumbs,
    SectionTitlePrimary,
    LoadingData,
    ErrorMessage,
    BaseMovieCard,
    BaseInput,
    SearchIcon,
  },
  data() {
    return {
      search: null,
    };
  },
  computed: {
    ...mapState(useMoviesStore, [
      "movies",
      "moviesIsLoading",
      "moviesError",
      "getErrorMessage",
    ]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMovies"]),
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <section class="movies">
    <BreadCrumbs currentPageName="Movies" />
    <SectionContainer class="movies__conrainer">
      <SectionTitlePrimary title="All the movies" class="movies__title" />
      <div class="movies__filters">
        <BaseInput
          class="movies__search"
          inputType="text"
          name="search"
          label="Search"
          placeholder="What are you looking for?"
          v-model="search"
          ><SearchIcon
        /></BaseInput>
      </div>
      <div class="movies__wrapper">
        <LoadingData v-if="moviesIsLoading" />
        <ErrorMessage v-else-if="moviesError">{{
          getErrorMessage
        }}</ErrorMessage>
        <div v-else class="movies__cards">
          <BaseMovieCard
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
            :to="{ name: 'MovieDetails', params: { movieId: movie.id } }"
            class="movies__card"
          />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.movies__title {
  text-align: center;
  padding: 40px 0 32px 0;
  @include mediumScreen {
    text-align: left;
    padding-top: 64px;
  }
}
.movies__cards {
  display: grid;
  grid-template-columns: 1fr;
  @include mediumScreen {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    justify-items: center;
    align-items: stretch;
    gap: 40px;
  }
  @include largeScreen {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.movies__card {
  @include mediumScreen {
    display: flex;
  }
}
</style>
