<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useMoviesStore } from "@/stores/movies";
import { getAllMovieGenres } from "@/api/services/MovieGenres";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import BaseInput from "@/components/global/BaseInput.vue";
import SearchIcon from "@/assets/images/search.svg";
import BaseSelect from "@/components/global/BaseSelect.vue";

export default defineComponent({
  name: "AllMovies",
  components: {
    SectionContainer,
    BreadCrumbs,
    SectionTitlePrimary,
    LoadingData,
    ErrorMessage,
    BaseMovieCard,
    BaseInput,
    SearchIcon,
    BaseSelect,
  },
  data() {
    return {
      search: null,
      selected: null,
      movieGenres: [],
      movieGenresIsLoading: false,
      movieGenresError: null,
    };
  },
  computed: {
    ...mapState(useMoviesStore, [
      "movies",
      "moviesIsLoading",
      "moviesError",
      "getMoviesErrorMessage",
    ]),
    getMovieGenresErrorMessage() {
      return (
        this.movieGenresError?.message ||
        "We are sorry, but the categories cannot be displayed"
      );
    },
    getMovieGenresNames() {
      return this.movieGenres.map((genre) => genre.name);
    },
    moviesFilteredByGenre() {
      return !this.selected
        ? this.movies
        : this.movies.filter((movie) => movie.genre.name === this.selected);
    },
    moviesFilteredByGenreAndTitle() {
      return !this.search
        ? this.moviesFilteredByGenre
        : this.movies.filter((movie) =>
            movie.title.toLowerCase().includes(this.search.toLowerCase().trim())
          );
    },
  },
  methods: {
    ...mapActions(useMoviesStore, ["getMovies"]),
    async getGenres() {
      this.movieGenresIsLoading = true;
      try {
        const respData = await getAllMovieGenres();
        this.movieGenres = respData.data;
      } catch (error) {
        this.movieGenresError = error;
      } finally {
        this.movieGenresIsLoading = false;
      }
    },
  },
  mounted() {
    this.getMovies();
    this.getGenres();
  },
  metaInfo() {
    return {
      title: "Montecinema | All the movies",
    };
  },
});
</script>

<template>
  <section class="movies">
    <BreadCrumbs currentPageName="Movies" />
    <SectionContainer class="movies__conrainer">
      <SectionTitlePrimary title="All the movies" class="movies__title" />
      <LoadingData v-if="moviesIsLoading" />
      <ErrorMessage v-else-if="moviesError">{{
        getMoviesErrorMessage
      }}</ErrorMessage>

      <div v-else class="movies__filters">
        <div class="movies__filter-search">
          <BaseInput
            class="movies__search"
            inputType="text"
            name="search"
            label="Search"
            placeholder="What are you looking for?"
            v-model="search"
          >
            <SearchIcon class="movies__search-icon" />
          </BaseInput>
        </div>
        <div class="movies__filter-category">
          <LoadingData v-if="movieGenresIsLoading" />
          <ErrorMessage v-else-if="movieGenresError">{{
            getMovieGenresErrorMessage
          }}</ErrorMessage>
          <div v-else class="movies__filter-select">
            <BaseSelect
              v-model="selected"
              label="Category"
              placeholder="All categories"
              class="movies__search-category"
              :options="getMovieGenresNames"
            ></BaseSelect>
          </div>
        </div>
      </div>

      <div class="movies__cards">
        <BaseMovieCard
          v-for="movie in moviesFilteredByGenreAndTitle"
          :key="movie.id"
          :movie="movie"
          :to="{ name: 'MovieDetails', params: { movieId: movie.id } }"
          class="movies__card"
        />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.movies__conrainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
}
.movies__title {
  text-align: center;
  padding: 40px 0 32px 0;
  @include mediumScreen {
    text-align: left;
    padding-top: 64px;
  }
}
.movies__filters {
  @include mediumScreen {
    display: flex;
    gap: 40px;
    margin-bottom: 64px;
  }
}

.input__wrapper.movies__search {
  position: relative;
  @include mediumScreen {
    width: 602px;
  }
  @include largeScreen {
    width: 883px;
  }
}

.movies__search-icon {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  right: 3%;
}

.movies__search-category {
  margin: 40px 0 32px 0;
  @include mediumScreen {
    margin: 0;
  }
}

.movies__cards {
  display: grid;
  grid-template-columns: 1fr;
  @include mediumScreen {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    justify-items: center;
    align-items: stretch;
    gap: 40px;
  }
  @include largeScreen {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.movies__card {
  @include mediumScreen {
    display: flex;
  }
}
</style>
