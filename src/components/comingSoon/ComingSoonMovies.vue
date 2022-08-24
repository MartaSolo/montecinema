<script>
import { defineComponent } from "vue";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  components: { BaseMovieCard, LoadingData, ErrorMessage },
  props: {
    moviesIsLoading: {
      type: Boolean,
    },
    moviesErrorMessage: {
      type: String,
    },
    moviesComingSoon: {
      type: Array,
    },
  },
});
</script>

<template>
  <div class="soon__movies">
    <LoadingData v-if="moviesIsLoading" />
    <ErrorMessage v-else-if="moviesErrorMessage">{{
      error.message
    }}</ErrorMessage>
    <div v-else class="soon__movies-cards">
      <BaseMovieCard
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
  margin-bottom: 64px;
  @include mediumScreen {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
    margin-bottom: 40px;
  }
  @include largeScreen {
    gap: 62px;
  }
}
.soon__movie-card {
  display: flex;
  @include mediumScreen {
    &:nth-child(3) {
      display: none;
    }
  }
  @include largeScreen {
    &:nth-child(3) {
      display: flex;
    }
  }
}
</style>
