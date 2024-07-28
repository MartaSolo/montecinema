<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import SectionDescription from "@/components/global/SectionDescription.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import BaseImage from "@/components/global/BaseImage.vue";

export default defineComponent({
  components: {
    SectionContainer,
    SectionTitlePrimary,
    SectionDescription,
    BaseButton,
    BaseImage,
  },
});
</script>

<template>
  <SectionContainer class="welcome">
    <section class="welcome__container">
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
          :to="{ name: 'AllScreenings' }"
          colorTheme="accent-filled"
          >{{ $t("welcome.booking") }}</BaseButton
        >
      </div>
      <div class="welcome__image">
        <BaseImage
          src="/src/assets/images/cinema.jpeg"
          alt="spectators in the cinema hall"
          class="welcome__image--img"
        />
      </div>
    </section>
  </SectionContainer>
</template>

<style lang="scss" scoped>
.welcome__container {
  @include mediumScreen {
    display: flex;
  }
}

.welcome__text {
  background-color: $colorRedWispPink;
  padding: 50px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @include mediumScreen {
    width: 69%;
    padding: 50px;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.welcome__title {
  text-align: center;
  @include mediumScreen {
    font-size: 3rem;
    text-align: left;
  }
  @include mediumPlusScreen {
    font-size: 5rem;
  }
}

.welcome__description {
  text-align: center;
  @include mediumScreen {
    text-align: left;
  }
}

.welcome__image {
  display: none;
  @include mediumScreen {
    display: block;
    width: 31%;
  }

  &--img {
    width: 100%;
    height: 100%;
  }
}
</style>
