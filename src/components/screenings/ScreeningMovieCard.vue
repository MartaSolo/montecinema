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
  grid-template-columns: 68px auto;
  grid-gap: 16px;
  @include mediumScreen {
    grid-template-columns: 98px auto;
    grid-template-rows: 72px 26px;
    min-height: 212px;
    padding: 40px;
    margin-bottom: 40px;
    height: 178px;
    box-shadow: 0px 24px 78px rgba(0, 0, 0, 0.08),
      0px 5.36071px 17.4223px rgba(0, 0, 0, 0.0238443),
      0px 1.59602px 5.18708px rgba(0, 0, 0, 0.0161557);
  }
}

.screening__image {
  width: 68px;
  height: 68px;
  object-fit: cover;
  object-position: top;
  @include mediumScreen {
    grid-row: 1 / span 2;
    width: 98px;
    height: 132px;
  }
}
.screening__movie {
  @include mediumScreen {
    grid-row: 1;
  }
}

.screening__movie-title {
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
}
.screening__movie-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.screening__movie-length {
  padding: 8px 0;
}
.screening__movie-hours {
  grid-column: 1 / span 2;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  @include mediumScreen {
    grid-column: 2;
    height: 40px;
  }
}
.screening__movie-hour {
  @include mediumScreen {
    height: 40px;
    padding: 12px 32px;
    font-size: 1rem;
  }
}
</style>
