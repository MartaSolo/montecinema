<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import SectionDescription from "@/components/global/SectionDescription.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import BaseImage from "@/components/global/BaseImage.vue";

export default defineComponent({
  name: "WelcomeSection",
  components: {
    SectionContainer,
    SectionTitlePrimary,
    SectionDescription,
    BaseButton,
    BaseImage,
  },
  data() {
    return {
      userLogged: false,
    };
  },
  computed: {
    bookingRoute() {
      return this.userLogged ? { name: "BookTicket" } : { name: "UserLogIn" };
    },
  },
});
</script>

<template>
  <section class="welcome">
    <SectionContainer class="welcome__container">
      <div class="welcome__text">
        <SectionTitlePrimary
          :title="$t('welcome.title')"
          class="welcome__title"
        />
        <SectionDescription
          :description="$t('welcome.description')"
          class="welcome__description"
        />
        <BaseButton
          class="welcome__link"
          size="large"
          :to="bookingRoute"
          colorTheme="accent-filled"
          >{{ $t("welcome.booking") }}</BaseButton
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
  height: 562px;
  @include mediumScreen {
    height: 618px;
  }
}
.welcome__container {
  height: 100%;
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

.welcome__title {
  @include mediumScreen {
    width: 650px;
    align-self: flex-start;
  }
}

.welcome__description {
  align-self: flex-start;
  @include mediumScreen {
    width: 680px;
  }
}
.welcome__link {
  width: 310px;
  @include mediumScreen {
    width: 224px;
    align-self: flex-start;
    padding: 19px 20px;
  }
}
.welcome__image {
  display: none;
  @include largeScreen {
    display: block;
  }
}
</style>
