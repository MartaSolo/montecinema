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
      isLoading: false,
      errorMessage: null,
    };
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
    <div class="movie__details">
      <LoadingData v-if="isLoading" />
      <ErrorMessage v-else-if="errorMessage">{{ error.message }}</ErrorMessage>
      <div v-else>{{ movieDetails.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
