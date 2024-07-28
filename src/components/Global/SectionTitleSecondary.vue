<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitleSecondary",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
});
</script>

<template>
  <h2 class="section__title--secondary" v-bind="$attrs">{{ title }}</h2>
  <h2 v-if="subtitle" class="section__subtitle--secondary" v-bind="$attrs">
    {{ subtitle }}
  </h2>
</template>

<style lang="scss" scoped>
.section__title--secondary,
.section__subtitle--secondary {
  font-family: $fontTitle;
  font-weight: 600;
  font-size: 3rem;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: $colorGreyTuna;
  text-align: left;
  margin: 0;
  @include mediumScreen {
    font-size: 4rem;
  }
}
.section__subtitle--secondary {
  color: $colorGreyJumbo;
  padding-bottom: 32px;
}

.contact__title {
  padding-bottom: 48px;
}

.section__title--secondary.register__title,
.section__title--secondary.login__title {
  padding-top: 64px;
  @include mediumScreen {
    padding-top: 124px;
    align-self: flex-start;
  }
}

.section__subtitle--secondary.register__title,
.section__subtitle--secondary.login__title {
  padding-bottom: 24px;
  @include mediumScreen {
    padding-bottom: 40px;
    align-self: flex-start;
  }
}

.section__title--secondary.movie_screenings-title,
.section__subtitle--secondary.movie_screenings-title {
  font-size: 1.5rem;
  line-height: 2rem;
  @include mediumScreen {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

.section__title--secondary.booking__title {
  padding: 64px 0 12px 0;
  @include mediumScreen {
    padding: 64px 0 64px 0;
  }
}
</style>
