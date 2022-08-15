<script>
import { defineComponent } from "vue";
import MovieCardBasic from "../Global/MovieCardBasic.vue";

export default defineComponent({
  name: "ComingSoonMovies",
  data() {
    return {
      movies: [
        {
          id: 1,
          title: "Harry Potter",
          genre: {
            id: 3,
            name: "Fantasy",
          },
          poster_url:
            "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
          length: 183,
          release_date: "2001-11-16",
          description:
            "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        },
        {
          id: 2,
          title: "Harry Potter and the Philosopher's Stone",
          genre: {
            id: 3,
            name: "Fantasy",
          },
          poster_url:
            "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
          length: 159,
          release_date: "2001-11-16",
          description:
            "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        },
        {
          id: 3,
          title: "Harry Potter and the Philosopher's",
          genre: {
            id: 3,
            name: "Fantasy",
          },
          poster_url:
            "https://images-na.ssl-images-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
          length: 159,
          release_date: "2001-11-16",
          description:
            "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        },
      ],
    };
  },

  components: { MovieCardBasic },
});
</script>

<template>
  <div class="soon__movies">
    <MovieCardBasic v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style lang="scss" scoped>
.soon__movies {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mediumScreen {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  @include largeScreen {
    gap: 62px;
  }
}
</style>
