<script>
import { defineComponent } from "vue";
import ScreeningMovieCard from "../global/ScreeningMovieCard.vue";
import LoadingData from "../global/LoadingData.vue";

export default defineComponent({
  name: "ScreeningsMovies",
  components: { ScreeningMovieCard, LoadingData },
});
</script>

<template>
  <div class="screenings__movies">
    <ScreeningMovieCard></ScreeningMovieCard>
    <LoadingData />
  </div>
</template>

<style lang="scss" scoped></style>
