<script>
import { defineComponent } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";

export default defineComponent({
  name: "ScreeningMovieCard",
  components: { MovieLength, BaseImage, MovieCategory },
  props: {
    screening: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userLogged: false,
    };
  },
});
</script>

<template>
  <div class="movie__screening">
    <BaseImage
      class="movie__screening-image"
      :src="movie.poster_url"
      :alt="movie.title"
    />
    <div class="movie__screening-text">
      <h4 class="movie__screening-title">Predator</h4>
      <div class="movie__screening-descrpition">
        <MovieCategory class="movie__screening-category" :category="fantasy" />
        <MovieLength class="movie__screening-length" :length="movieLength" />
      </div>
      <div class="movie__screening-hours">
        <BaseButton
          class="movie__screening-hour"
          :to="routeName"
          size="small"
          colorTheme="dark-empty"
        ></BaseButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie__screening {
  display: flex;
  min-height: 172px;
  padding: 32px 16px;
  gap: 16px;
  box-shadow: inset 0px -1px 0px $colorScreeningCardBoxShadow;
  // @include mediumScreen {
  //   width: 444px;
  //   min-height: 371px;
  //   padding: 40px;
  // }
  // @include largeScreen {
  //   width: 421px;
  // }
}
.movie__screening-title {
  font-weight: 700px;
  font-size: 1.5rem;
  margin: 0;
}
.movie__screening-image {
  width: 68px;
  height: 68px;
  object-fit: cover;
  object-position: top;
}
</style>
