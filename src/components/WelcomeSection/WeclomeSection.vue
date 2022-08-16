<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import SectionDescription from "@/components/global/SectionDescription.vue";
import BaseLink from "@/components/global/BaseLink.vue";
import BaseImage from "@/components/global/BaseImage.vue";

export default defineComponent({
  name: "WeclomeSection",
  components: {
    SectionContainer,
    SectionTitlePrimary,
    SectionDescription,
    BaseLink,
    BaseImage,
  },
});
</script>

<template>
  <section class="welcome">
    <SectionContainer class="welcome__container">
      <div class="welcome__text">
        <SectionTitlePrimary
          title="Welcome to the best cinema in Monterail"
          class="welcome__title"
        />
        <SectionDescription
          description="Best movies, best experiences, best people. And all that doesn’t exist. Yikes."
          class="welcome__description"
        />
        <BaseLink class="welcome__link" url="#" colorTheme="accent-filled"
          >Book a ticket</BaseLink
        >
      </div>
      <div class="welcome__image">
        <BaseImage
          src="/src/assets/images/cinema.jpeg"
          alt="spectators in the cinema hall"
          class="welcome"
        />
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
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
    // justify-content: center;
    padding: 80px 66px;
  }
  @include largeScreen {
    width: calc(100% - 457px);
    margin: 0;
  }
}

.welcome__title {
  @include mediumScreen {
    width: 600px;
    align-self: flex-start;
  }
}

.welcome__description {
  align-self: flex-start;
  @include mediumScreen {
    width: 600px;
  }
}
.welcome__link {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    width: 224px;
    align-self: flex-start;
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

<!-- <script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import SectionDescription from "@/components/global/SectionDescription.vue";
import BaseLink from "@/components/global/BaseLink.vue";
import BaseImage from "@/components/global/BaseImage.vue";

export default defineComponent({
  name: "WeclomeSection",
  components: {
    SectionContainer,
    SectionTitlePrimary,
    SectionDescription,
    BaseLink,
    BaseImage,
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
        <BaseLink class="welcome" url="#" colorTheme="accent-filled"
          >Book a ticket</BaseLink
        >
      </div>
      <div class="welcome__image">
        <BaseImage
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

.link.welcome {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    width: 224px;
    align-self: flex-start;
  }
}
.welcome__image {
  display: none;
  @include largeScreen {
    display: block;
    height: 100%;
  }
}
</style> -->
