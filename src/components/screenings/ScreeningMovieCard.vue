<script>
import { defineComponent } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import ScreeningMovieHours from "@/components/screenings/ScreeningMovieHours.vue";

export default defineComponent({
  name: "ScreeningMovieCard",
  components: {
    MovieLength,
    BaseImage,
    MovieCategory,
    BaseButton,
    ScreeningMovieHours,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    movieSeances: {
      type: Array,
    },
    movieSeance: {
      type: Object,
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
  <div class="screening-card">
    <BaseImage
      class="screening-card__image"
      :src="movie.poster_url"
      :alt="movie.title"
    />

    <div class="screening-card__movie">
      <router-link
        class="screening-card__movie--title"
        :to="{ name: 'MovieDetails', params: { movieId: movie.id } }"
        >{{ movie.title }}</router-link
      >
      <div class="screening-card__movie--info">
        <MovieCategory
          class="screening-card__movie--category"
          :category="movie.genre.name"
        />
        <MovieLength
          class="screening-card__movie--length"
          :length="movie.length"
        />
      </div>
      <ScreeningMovieHours v-if="movieSeances" :movieSeances="movieSeances" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screening-card {
  border-radius: 8px;
  margin-bottom: 20px;
  @include cardBoxShadow;
  display: flex;
  flex-direction: column;
  @include mediumScreen {
    flex-direction: row;
    margin-bottom: 24px;
  }
}

.screening-card__image {
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  object-fit: cover;
  aspect-ratio: 4 / 5;
  @include mediumScreen {
    border-top-right-radius: 0;
    border-bottom-left-radius: 8px;
    width: 15%;
  }
}

.screening-card__movie {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include mediumScreen {
    padding: 30px;
    gap: 24px;
    flex-grow: 1;
  }

  &--title {
    font-weight: 700;
    font-size: 1.5rem;
    display: inline-block;
    @include mediumScreen {
      font-size: 2rem;
    }
  }

  &--info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include mediumScreen {
      justify-content: flex-start;
      gap: 24px;
    }
  }
}
</style>
