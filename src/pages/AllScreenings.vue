<script>
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import ScreeningsSection from "@/components/screenings/ScreeningsSection.vue";

export default defineComponent({
  name: "AllScreenings",
  components: { BreadCrumbs, ScreeningsSection },
  methods: {
    ...mapActions(useMoviesStore, ["getMovies"]),
  },
  mounted() {
    this.getMovies();
  },
});
</script>

<template>
  <section>
    <BreadCrumbs currentPageName="Screenings" />
    <ScreeningsSection />
  </section>
</template>

<style lang="scss" scoped></style>
