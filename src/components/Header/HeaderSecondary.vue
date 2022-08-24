<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import HeaderLogo from "@components/header/HeaderLogo.vue";

export default defineComponent({
  name: "HeaderPrimary",
  components: {
    SectionContainer,
    HeaderLogo,
  },
});
</script>

<template>
  <header class="header">
    <SectionContainer class="header__container">
      <HeaderLogo />
      <div class="header__text">
        Developed with <span className="header__text-heart">&#10084; </span> by
        Monterail
      </div>
    </SectionContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include largeScreen {
    height: 112px;
  }
}
.header__container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__text {
  display: none;
  @include mediumScreen {
    display: inline-block;
    font-family: $fontSecondary;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    .header__text-heart {
      color: $colorRedCherry;
      font-size: 1.5rem;
      padding-left: 5px;
    }
  }
}
</style>
