<script>
import { defineComponent } from "vue";
import SectionContainer from "../Global/SectionContainer.vue";
import ComingSoonMovies from "./ComingSoonMovies.vue";

export default defineComponent({
  name: "ComingSoonSection",
  components: {
    SectionContainer,
    ComingSoonMovies,
  },
});
</script>

<template>
  <section class="soon__section">
    <SectionContainer class="soon__container">
      <div class="soon__text">
        <h3 class="soon__title-primary">
          Soon<span class="soon__title-secondary"> in the cinema</span>
        </h3>
        <a href="#" class="soon__link">See all</a>
      </div>
      <ComingSoonMovies />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.soon__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0 24px 0;
}
.soon__title-primary,
.soon__link {
  margin: 0;
  text-transform: uppercase;
  font-family: $fontSecondary;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.soon__title-secondary {
  display: none;
  @include mediumScreen {
    display: inline;
  }
}
.soon__link {
  color: $colorRedCherry;
  &:hover {
    color: $colorRedTotemPole;
  }
}
</style>
