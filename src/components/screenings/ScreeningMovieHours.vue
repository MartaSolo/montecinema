<script setup lang="ts">
import { Seance } from "@/types";
import BaseButton from "@/components/global/BaseButton.vue";

const props = defineProps<{
  movieSeances: Seance[];
}>();

const getSeanceHour = (seance: Seance) => {
  const date = new Date(seance.datetime);
  const hour = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `${date.getMinutes()}0` : date.getMinutes();
  return `${hour}:${minutes}`;
};
</script>

<template>
  <div class="movie-hours">
    <BaseButton
      v-for="movieSeance in movieSeances"
      :key="movieSeance.id"
      class="movie-hour"
      :to="{
        name: 'ChooseSeats',
        params: { movieSeanceId: movieSeance.id },
      }"
      size="tiny"
      colorTheme="accent-empty"
    >
      {{ getSeanceHour(movieSeance) }}
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.movie-hours {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @include mediumScreen {
    gap: 16px;
    flex-grow: 1;
    align-items: end;
  }
}

.movie-hour {
  padding: 12px 22px;
  @include mediumScreen {
    padding: 20px 32px;
  }
}
</style>
