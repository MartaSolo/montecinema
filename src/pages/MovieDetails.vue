<script>
import { defineComponent } from "vue";
import { getMovieById } from "@/api/services/Movies";
import LoadingData from "@/components/global/LoadingData.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";

export default defineComponent({
  name: "MovieDetails",
  components: { LoadingData, ErrorMessage },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movieDetails: null,
      isLoading: true,
      errorMessage: null,
    };
  },
  computed: {
    getMovieTitle() {
      return this.movieDetails.title;
    },
  },
  methods: {
    async getMovieDetails() {
      this.isLoading = true;
      try {
        const respData = await getMovieById(this.movieId);
        this.movieDetails = respData.data;
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getMovieDetails();
  },
});
</script>

<template>
  <div>
    <h1>Movie details page</h1>
    <LoadingData v-if="isLoading" />
    <ErrorMessage v-else-if="errorMessage">{{ error.message }}</ErrorMessage>
    <div v-else class="movie__details">
      <div>{{ getMovieTitle }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>