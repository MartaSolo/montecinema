<script>
import { defineComponent } from "vue";
import { getAllMovies } from "@/api/services/Movies";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  components: { BaseMovieCard, LoadingData, ErrorMessage },
  data() {
    return {
      isLoading: false,
      movies: [],
      errorMessage: null,
    };
  },
  computed: {
    comingSoonMovies() {
      const newMovies = this.movies.slice(0, 3);
      return newMovies;
    },
  },
  methods: {
    async getMovies() {
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
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div class="soon__movies">
    <LoadingData v-if="isLoading" />
    <ErrorMessage v-else-if="errorMessage">{{ error.message }}</ErrorMessage>
    <div v-else class="soon__movies-cards">
      <BaseMovieCard
        v-for="movie in comingSoonMovies"
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
  display: flex;
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
<!-- <script>
import { defineComponent } from "vue";
import { getAllMovies } from "@/api/services/Movies";
import BaseMovieCard from "@/components/global/BaseMovieCard.vue";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  components: { BaseMovieCard, LoadingData, ErrorMessage },
  data() {
    return {
      isLoading: false,
      movies: [],
      errorMessage: null,
    };
  },
  computed: {
    comingSoonMovies() {
      const newMovies = this.movies.slice(0, 3);
      return newMovies;
    },
  },
  methods: {
    async getMovies() {
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
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div class="soon__movies">
    <LoadingData v-if="isLoading" />
    <ErrorMessage v-else-if="errorMessage">{{ error.message }}</ErrorMessage>
    <div v-else class="soon__movies-cards">
      <BaseMovieCard
        v-for="movie in comingSoonMovies"
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
  display: flex;
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
</style> -->
