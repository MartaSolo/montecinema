<script>
import { defineComponent } from "vue";
import ScreeningMovieCard from "@components/global/ScreeningMovieCard.vue";
import LoadingData from "@components/global/LoadingData.vue";

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
