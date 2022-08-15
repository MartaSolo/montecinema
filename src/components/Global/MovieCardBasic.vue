<script>
import { defineComponent } from "vue";
import ImageBasic from "../Global/ImageBasic.vue";
import MovieCategory from "./MovieCategory.vue";
import MovieLength from "./MovieLength.vue";

export default defineComponent({
  name: "MovieCardBasic",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movieLength() {
      const hours = Math.floor(this.movie.length / 60);
      const minutes = String(this.movie.length % 60);
      return minutes.length === 1
        ? `${hours}h 0${minutes} min`
        : `${hours}h ${minutes} min`;
    },
  },
  components: { MovieLength, ImageBasic, MovieCategory },
});
</script>

<template>
  <div class="movie__card">
    <h4 class="movie__card-title">{{ movie.title }}</h4>
    <MovieLength class="movie__card-length" :length="movieLength" />
    <ImageBasic
      :src="movie.poster_url"
      :alt="movie.title"
      class="movie__card-image"
    />
    <MovieCategory
      class="movie__card-category"
      :category="this.movie.genre.name"
    />
  </div>
</template>

<style lang="scss" scoped>
.movie__card {
  width: 327px;
  min-height: 339px;
  border-radius: 8px;
  box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
    0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
    0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  padding: 24px;
  margin-bottom: 24px;
  @include mediumScreen {
    width: 444px;
    min-height: 371px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    &:nth-child(3) {
      display: none;
    }
  }
  @include largeScreen {
    width: 421px;
    &:nth-child(3) {
      display: block;
    }
  }
}
.movie__card-title {
  font-weight: 700px;
  font-size: 2.25rem;
  margin: 0;
  flex-grow: 2;
}
.movie__card-category {
  align-self: flex-start;
}
</style>
