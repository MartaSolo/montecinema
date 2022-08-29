<script>
import { defineComponent } from "vue";
import { getAllMovies } from "@/api/services/Movies";
import WelcomeSection from "@/components/welcome/WelcomeSection.vue";
import ComingSoonSection from "@/components/comingSoon/ComingSoonSection.vue";
import ScreeningsSection from "@/components/screenings/ScreeningsSection.vue";
import ContactUsSection from "@/components/contact/ContactUsSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    WelcomeSection,
    ComingSoonSection,
    ScreeningsSection,
    ContactUsSection,
  },
  data() {
    return {
      moviesIsLoading: false,
      moviesErrorMessage: null,
      movies: [],
    };
  },
  computed: {
    moviesComingSoon() {
      return this.movies.slice(0, 3);
    },
  },
  methods: {
    async getMovies() {
      this.moviesIsLoading = true;
      try {
        const respData = await getAllMovies();
        this.movies = respData.data;
      } catch (error) {
        this.moviesErrorMessage = error.message;
      } finally {
        this.moviesIsLoading = false;
      }
    },
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div>
    <WelcomeSection />
    <ComingSoonSection
      :moviesIsLoading="moviesIsLoading"
      :moviesErrorMessage="moviesErrorMessage"
      :moviesComingSoon="moviesComingSoon"
    />
    <ScreeningsSection
      :moviesIsLoading="moviesIsLoading"
      :moviesErrorMessage="moviesErrorMessage"
      :movies="movies"
    />
    <ContactUsSection />
  </div>
</template>

<style lang="scss" scoped></style>
