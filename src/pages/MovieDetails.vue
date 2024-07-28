<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useMovieSeancesStore } from "@/stores/movieSeances";
import { useMoviesStore } from "@/stores/movies";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import ScreeningsCalendar from "@/components/screenings/ScreeningsCalendar.vue";
import ScreeningMovieHours from "@/components/screenings/ScreeningMovieHours.vue";

export default defineComponent({
  name: "MovieDetails",
  components: {
    LoadingData,
    ErrorMessage,
    SectionContainer,
    BreadCrumbs,
    SectionTitlePrimary,
    MovieCategory,
    MovieLength,
    SectionTitleSecondary,
    ScreeningsCalendar,
    BaseImage,
    ScreeningMovieHours,
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    ...mapState(useMovieSeancesStore, [
      "movieSeances",
      "movieSeancesIsLoading",
      "movieSeancesError",
      "movieSeancesErrorMessage",
    ]),
    ...mapState(useMoviesStore, [
      "movie",
      "movieIsLoading",
      "movieError",
      "movieErrorMessage",
    ]),
    movieTitle() {
      return this.movie.title;
    },
    movieReleaseYear() {
      return this.movie.release_date.substring(0, 4);
    },
    movieImagePath() {
      return this.movie.poster_url;
    },
    movieStyledImage() {
      return { background: "url(" + this.movieImagePath + ") center / cover" };
    },
    formattedWeekdayAndDate() {
      const weekday = this.date.toLocaleDateString("en-GB", {
        weekday: "long",
      });
      const formattedDate = this.date.toLocaleDateString("en-GB");
      return `${weekday} ${formattedDate}`;
    },
    formattedDate() {
      return this.date.toISOString().substring(0, 10);
    },
  },
  watch: {
    date(newDate, oldDate) {
      if (newDate !== oldDate) {
        this.getMovieSeances(this.movieId, this.formattedDate);
      }
    },
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMovie"]),
    ...mapActions(useMovieSeancesStore, ["getMovieSeances"]),
  },
  mounted() {
    this.getMovie(this.movieId);
    this.getMovieSeances(this.movieId, this.formattedDate);
  },
  metaInfo() {
    return {
      title: this.movieIsLoading ? "" : this.movieTitle,
    };
  },
});
</script>

<template>
  <LoadingData v-if="movieIsLoading" />
  <ErrorMessage v-else-if="movieError">{{ movieErrorMessage }}</ErrorMessage>
  <section v-else class="movie">
    <BreadCrumbs
      :currentPageName="this.movie.title"
      parentPageName="Movies"
      :parentRouteName="{ name: 'AllMovies' }"
    />

    <SectionContainer class="movie__container">
      <div class="movie__wrapper">
        <BaseImage
          :src="movie.poster_url"
          :alt="movieTitle"
          class="movie__image"
        />

        <div class="movie__details">
          <SectionTitlePrimary
            :title="movieTitle"
            class="movie__details--title"
          />
          <div class="movie__details--parameters">
            <MovieCategory :category="movie.genre.name" />
            <div class="movie__details--year">{{ movieReleaseYear }}</div>
            <MovieLength :length="movie.length" />
          </div>
          <div class="movie__details--description">{{ movie.description }}</div>
        </div>

        <div class="movie__screenings">
          <SectionTitleSecondary
            title="Screenings:"
            :subtitle="formattedWeekdayAndDate"
            class="movie__screenings--title"
          ></SectionTitleSecondary>
          <ScreeningsCalendar v-model="date" />
          <LoadingData v-if="movieSeancesIsLoading" />
          <ErrorMessage v-else-if="movieSeancesError">{{
            movieSeancesErrorMessage
          }}</ErrorMessage>
          <ScreeningMovieHours v-else :movieSeances="movieSeances" />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.movie__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "image" "details" "screenings";
  gap: 40px;
  margin: 40px 0 60px 0;
  @include mediumScreen {
    margin: 64px 0;
    column-gap: 2%;
    grid-template-columns: 56% 42%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "details image"
      "screenings image";
  }
}

.movie__details {
  grid-area: details;
  @include mediumScreen {
    display: flex;
    flex-direction: column;
  }

  &--title {
    text-align: left;
  }

  &--parameters {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    @include mediumScreen {
      padding: 32px 0;
    }
  }

  &--year {
    font-weight: 700;
    font-size: 0.9rem;
    color: $colorGreyJumbo;
    padding: 16px 0;
    position: relative;
    &::after {
      content: ".";
      position: absolute;
      top: 25%;
      right: -28%;
    }
  }

  &--description {
    font-family: $fontSecondary;
    font-weight: 400;
    font-size: 1.1rem;
    letter-spacing: 0.015em;
    line-height: 170%;
    @include mediumScreen {
      font-size: 1.4rem;
    }
  }
}

.movie__screenings {
  grid-area: screenings;
}

:deep(.section__title--secondary),
:deep(.section__subtitle--secondary) {
  font-size: 2rem;
  @include mediumScreen {
    font-size: 3rem;
  }
}

.movie__image {
  grid-area: image;
  width: 100%;
  object-fit: cover;
  @include mediumScreen {
    height: 100%;
  }
}
</style>
