<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import RegisterFirstStep from "@/components/authentication/RegisterFirstStep.vue";

export default defineComponent({
  name: "UserRegister",
  components: { SectionContainer, SectionTitleSecondary, RegisterFirstStep },
  data() {
    return {
      step: 1,
      stepTitles: {
        first: { title: "Ahoy you!", subtitle: "Care to register?" },
        second: { title: "Great!", subtitle: "Now your name" },
      },
    };
  },
});
</script>

<template>
  <section class="register">
    <SectionContainer class="register__container">
      <SectionTitleSecondary
        v-if="step === 1"
        :title="stepTitles.first.title"
        :subtitle="stepTitles.first.subtitle"
        class="register__title"
      />
      <SectionTitleSecondary
        v-if="step === 2"
        :title="stepTitles.second.title"
        :subtitle="stepTitles.second.subtitle"
        class="register__title"
      />
      <form class="register__form" novalidate>
        <RegisterFirstStep v-if="step === 1" />
      </form>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.register__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 0 0 124px 0;
  border: 1px solid blue;
}

.register__form {
  border: 1px solid green;
  max-width: 600px;
  padding: 16px 0 48px 0;
  @include mediumScreen {
    border-radius: 24px;
    padding: 64px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  }
}

.register__title {
  padding-top: 64px;
}
</style>
