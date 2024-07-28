<script>
import { defineComponent } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import MovieCategory from "@/components/global/MovieCategory.vue";
import MovieLength from "@/components/global/MovieLength.vue";

export default defineComponent({
  components: { MovieLength, BaseImage, MovieCategory },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    to: {
      type: Object,
      default: null,
    },
  },
});
</script>

<template>
  <router-link :to="to" class="movie__card">
    <div>
      <BaseImage
        :src="movie.poster_url"
        :alt="movie.title"
        class="movie__card-image"
      />
    </div>
    <div class="movie__card-content">
      <h4 class="movie__card-title">{{ movie.title }}</h4>
      <div class="movie__card-info">
        <MovieLength class="movie__card-length" :length="movie.length" />
        <MovieCategory
          class="movie__card-category"
          :category="this.movie.genre.name"
        />
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.movie__card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @include cardBoxShadow;
}

.movie__card-image {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 5;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.movie__card-content {
  padding: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include mediumScreen {
    padding: 20px;
  }
}

.movie__card-title {
  font-weight: 700px;
  font-size: 2rem;
  margin: 0;
  @include mediumScreen {
    flex-grow: 1;
  }
}

.movie__card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
