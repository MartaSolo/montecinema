<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import ComingSoonMovies from "@/components/comingSoon/ComingSoonMovies.vue";

export default defineComponent({
  name: "ComingSoonSection",
  components: {
    SectionContainer,
    BaseButton,
    ComingSoonMovies,
  },
});
</script>

<template>
  <section class="soon">
    <SectionContainer class="soon__container">
      <div class="soon__text">
        <h3 class="soon__title-primary">
          Soon <span class="soon__title-secondary">in the cinema</span>
        </h3>
        <BaseButton
          class="soon__link"
          :to="{ name: 'AllMovies' }"
          colorTheme="accent-text"
          >See all</BaseButton
        >
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
  padding: 60px 0 34px 0;
}
.soon__title-primary {
  margin: 0;
  text-transform: uppercase;
  font-family: $fontSecondary;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.soon__link {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: $colorRedCherry;
  &:hover {
    color: $colorRedTotemPole;
    border: 2px solid $colorWhiteSnow;
  }
}
.soon__title-secondary {
  display: none;
  @include mediumScreen {
    display: inline;
  }
}
</style>
