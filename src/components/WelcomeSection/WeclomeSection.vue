<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/Global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/Global/SectionTitlePrimary.vue";
import SectionDescription from "@/components/Global/SectionDescription.vue";
import LinkBasic from "@/components/Global/LinkBasic.vue";
import ImageBasic from "@/components/Global/ImageBasic.vue";

export default defineComponent({
  name: "WeclomeSection",
  components: {
    SectionContainer,
    SectionTitlePrimary,
    SectionDescription,
    LinkBasic,
    ImageBasic,
  },
});
</script>

<template>
  <section class="welcome__section">
    <SectionContainer class="welcome__container">
      <div class="welcome__text">
        <SectionTitlePrimary
          title="Welcome to the best cinema in Monterail"
          class="welcome"
        />
        <SectionDescription
          description="Best movies, best experiences, best people. And all that doesn’t exist. Yikes."
          class="welcome"
        />
        <LinkBasic
          url="#"
          text="Book a ticket"
          colorTheme="accent-filled"
          class="welcome"
        />
      </div>
      <div class="welcome__image">
        <ImageBasic
          src="/src/assets/images/cinema.jpeg"
          alt="spectators in the cinema hall"
          class="welcome"
        />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.welcome__section {
  width: 100%;
  height: 562px;
  @include mediumScreen {
    height: 618px;
  }
}
.welcome__container {
  height: 100%;
  width: 100%;
  background-color: $colorRedWispPink;
  @include mediumScreen {
    background-color: $colorWhiteSnow;
    height: 100%;
  }
  @include largeScreen {
    display: flex;
  }
}
.welcome__text {
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @include mediumScreen {
    background-color: $colorRedWispPink;
    width: 100%;
    max-width: 100%;
    justify-content: space-between;
    padding: 80px 66px;
  }
  @include largeScreen {
    width: calc(100% - 457px);
    margin: 0;
  }
}
.welcome__image {
  display: none;
  @include largeScreen {
    display: block;
    height: 100%;
  }
}
</style>
