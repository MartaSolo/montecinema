<script>
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useMoviesStore } from "@/stores/movies";
import MovieCard from "@/components/movies/MovieCard.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  components: { MovieCard, LoadingData, ErrorMessage },
  computed: {
    ...mapState(useMoviesStore, [
      "movies",
      "moviesIsLoading",
      "moviesError",
      "moviesErrorMessage",
    ]),
    moviesComingSoon() {
      return this.movies.slice(0, 3);
    },
  },
});
</script>

<template>
  <div class="soon__movies">
    <LoadingData v-if="moviesIsLoading" />
    <ErrorMessage v-else-if="moviesError">{{
      moviesErrorMessage
    }}</ErrorMessage>
    <div v-else class="soon__movies-cards">
      <MovieCard
        v-for="movie in moviesComingSoon"
        :key="movie.id"
        :movie="movie"
        :to="{ name: 'MovieDetails', params: { movieId: movie.id } }"
        class="soon__movie-card"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.soon__movies-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @include mediumScreen {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.soon__movie-card {
  width: 100%;
  @include mediumScreen {
    width: 31%;
  }
}
</style>
