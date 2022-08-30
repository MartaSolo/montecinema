<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";

export default defineComponent({
  name: "AllMovies",
  components: { SectionContainer, BreadCrumbs },
});
</script>

<template>
  <BreadCrumbs currentPageName="Movies" />
  <SectionContainer>
    <h1>All Movies page</h1>
  </SectionContainer>
</template>

<style lang="scss" scoped></style>
