<script>
import { defineComponent } from "vue";
import { getAllMovies } from "../../api/services/Movies";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import LoadingData from "../global/LoadingData.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  components: { BaseMovieCard, LoadingData },
  data() {
    return {
      isLoading: false,
      movies: null,
      errorMessage: null,
    };
  },
  async mounted() {
    this.isLoading = true;
    try {
      const respData = await getAllMovies();
      this.movies = respData.data;
    } catch (error) {
      this.errorMessage = error.message;
    } finally {
      this.isLoading = false;
    }
  },
});
</script>

<template>
  <div class="soon__movies">
    <LoadingData v-if="isLoading" />
    <ErrorMessage v-else-if="errorMessage">{{ error.message }}</ErrorMessage>
    <div v-else class="soon__movies-cards">
      <BaseMovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
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
  display: none;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    display: flex;
  }
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
