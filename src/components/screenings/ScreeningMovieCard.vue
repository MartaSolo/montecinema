<script>
import { defineComponent } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";
import BaseButton from "@/components/global/BaseButton.vue";

export default defineComponent({
  name: "ScreeningMovieCard",
  components: { MovieLength, BaseImage, MovieCategory, BaseButton },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    movieSeances: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      userLogged: false,
    };
  },
  computed: {
    routeName() {
      return this.userLogged ? { name: "BookTicket" } : { name: "UserLogIn" };
    },
  },
  methods: {
    getSeanceHour(seance) {
      return seance.datetime.substring(11, 16);
    },
  },
});
</script>

<template>
  <div class="screening__card">
    <BaseImage
      class="screening__image"
      :src="movie.poster_url"
      :alt="movie.title"
    />

    <div class="screening__movie">
      <router-link
        class="screening__movie-title"
        :to="{ name: 'MovieDetails', params: { movieId: movie.id } }"
        >{{ movie.title }}</router-link
      >
      <div class="screening__movie-info">
        <MovieCategory
          class="screening__movie-category"
          :category="movie.genre.name"
        />
        <MovieLength class="screening__movie-length" :length="movie.length" />
      </div>
    </div>
    <div class="screening__movie-hours">
      <BaseButton
        v-for="movieSeance in movieSeances"
        :key="movieSeance.id"
        class="screening__movie-hour"
        :to="routeName"
        size="tiny"
        colorTheme="accent-empty"
        >{{ getSeanceHour(movieSeance) }}</BaseButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screening__card {
  min-height: 172px;
  padding: 32px 16px;
  box-shadow: inset 0px -1px 0px $colorScreeningCardBoxShadow;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  @include mediumScreen {
    width: 444px;
    min-height: 371px;
    padding: 40px;
  }
  @include largeScreen {
    width: 421px;
  }
}

.screening__image {
  width: 68px;
  height: 68px;
  object-fit: cover;
  object-position: top;
  @include mediumScreen {
    grid-row: 1 / span 2;
  }
}
.screening__movie-title {
  font-weight: 700px;
  font-size: 1.5rem;
  margin: 0;
}
.screening__movie-hours {
  // border: 1px solid blue;
  grid-column: 1 / span 2;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @include mediumScreen {
    grid-column: 2;
  }
}
</style>
