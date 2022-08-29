<script>
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
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
  methods: {
    ...mapActions(useMoviesStore, ["getMovies"]),
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <div>
    <WelcomeSection />
    <ComingSoonSection />
    <ScreeningsSection />
    <ContactUsSection />
  </div>
</template>

<style lang="scss" scoped></style>
