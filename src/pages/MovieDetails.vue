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
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import ScreeningsCalendar from "@/components/screenings/ScreeningsCalendar.vue";
import ScreeningMovieCard from "@/components/screenings/ScreeningMovieCard.vue";

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
    ScreeningMovieCard,
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
      const weekday = this.date.toLocaleDateString("en-US", {
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
      <div class="movie__details">
        <div class="movie__info">
          <SectionTitlePrimary :title="movieTitle" class="movie__title" />
          <div class="movie__parameters">
            <MovieCategory :category="movie.genre.name" />
            <div class="movie__year">{{ movieReleaseYear }}</div>
            <MovieLength :length="movie.length" />
          </div>
          <div class="movie__description">{{ movie.description }}</div>
        </div>
        <div
          class="movie__image"
          role="img"
          :aria-label="movie.title"
          :style="movieStyledImage"
        ></div>
      </div>
      <div class="movie_screenings">
        <SectionTitleSecondary
          title="Screenings:"
          :subtitle="formattedWeekdayAndDate"
          class="movie_screenings-title"
        ></SectionTitleSecondary>
        <ScreeningsCalendar v-model="date" />
        <LoadingData v-if="movieSeancesIsLoading" />
        <ErrorMessage v-else-if="movieSeancesError">{{
          movieSeancesErrorMessage
        }}</ErrorMessage>
        <div v-else class="movie_screenings-screening">
          <ScreeningMovieCard
            :movie="movie"
            :key="movie.id"
            :movieSeances="movieSeances"
          />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.movie__details {
  margin-bottom: 40px;
  @include mediumScreen {
    display: flex;
    align-items: stretch;
    gap: 32px;
    margin: 64px 0 64px 0;
  }
}
.movie__info {
  @include mediumScreen {
    width: 60%;
  }
  @include largeScreen {
    width: 50%;
  }
}
.movie__title {
  margin: 40px 0 32px 0;
  @include mediumScreen {
    margin: 0 0 32px 0;
  }
}
.movie__parameters {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  @include mediumScreen {
    padding-bottom: 32px;
  }
}
.movie__year {
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
.movie__description {
  font-family: $fontSecondary;
  font-weight: 400;
  font-size: 1.1rem;
  padding-bottom: 20px;
  letter-spacing: 0.015em;
  line-height: 170%;
  @include mediumScreen {
    font-size: 1.4rem;
  }
}
.movie__image {
  width: 100%;
  height: 300px;
  @include mediumScreen {
    width: 40%;
    height: inherit;
    overflow: hidden;
  }
  @include largeScreen {
    width: 50%;
  }
}
</style>
