<script>
import { defineComponent } from "vue";
import { getMovieById } from "@/api/services/Movies";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { urlGenerate } from "source-map/lib/util";

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
    BaseImage,
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: null,
      movieIsLoading: true,
      movieError: null,
    };
  },
  computed: {
    getMovieErrorMessage() {
      return (
        this.movieError?.message ||
        "We are sorry, but the movie cannot be displayed"
      );
    },
    getMovieTitle() {
      return this.movie.title;
    },
    getMovieReleaseYear() {
      return this.movie.release_date.substring(0, 4);
    },
    getImagePath() {
      return this.movie.poster_url;
    },
    getBackgroudStyle() {
      // https://stackoverflow.com/questions/54513103/is-it-possible-to-bind-the-inline-style-with-vue-js
      return { background: "url(" + this.getImagePath + ")" };
      // return { background: "url(" + this.getImagePath + ")" };
    },
  },
  methods: {
    async getMovie() {
      this.movieIsLoading = true;
      try {
        const respData = await getMovieById(this.movieId);
        this.movie = respData.data;
      } catch (error) {
        this.movieError = error;
      } finally {
        this.movieIsLoading = false;
      }
    },
  },
  mounted() {
    this.getMovie();
  },
});
</script>

<template>
  <LoadingData v-if="movieIsLoading" />
  <ErrorMessage v-else-if="movieError">{{ getMovieErrorMessage }}</ErrorMessage>
  <section v-else class="movie">
    <BreadCrumbs
      :currentPageName="this.movie.title"
      parentPageName="Movies"
      :parentRouteName="{ name: 'AllMovies' }"
    />
    <SectionContainer class="movie__conrainer">
      <div class="movie__details">
        <div class="movie__info">
          <SectionTitlePrimary :title="this.movie.title" class="movie__title" />
          <div class="movie__parameters">
            <MovieCategory :category="movie.genre.name" />
            <div class="movie__year">{{ getMovieReleaseYear }}</div>
            <MovieLength :length="movie.length" />
          </div>
          <div class="movie__description">{{ movie.description }}</div>
        </div>
        <div class="movie__image" :style="getBackgroudStyle">
          <!-- <BaseImage
            :src="movie.poster_url"
            :alt="movie.title"
            class="movie__image-image"
          /> -->
        </div>
      </div>
      <div>Screenings</div>
      <div>Screenings</div>
      <div>Screenings</div>
      <div>Screenings</div>
      <div>Screenings</div>
      <div>Screenings</div>
      <div>Screenings</div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.movie__details {
  border: 1px solid blue;
  @include mediumScreen {
    display: flex;
    align-items: stretch;
    gap: 32px;
    margin-top: 64px;
  }
}
.movie__info {
  background-color: palegoldenrod;
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
  // border: 1px solid red;
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
  // background-color: palegreen;
  width: 100%;
  height: 300px;
  border: 1px solid red;
  @include mediumScreen {
    width: 40%;
    height: inherit;
    // height: 300px;
    overflow: hidden;
  }
  @include largeScreen {
    width: 50%;
  }
}
.movie__image-image {
  // height: 350px;
  max-width: 100%;
  max-height: 100%;
  // height: auto;
  height: inherit;
  object-fit: cover;
  display: block;
}
</style>
