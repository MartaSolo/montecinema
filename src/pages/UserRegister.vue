<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import ErrorMessage from "@/components/global/ErrorMessage.vue";
import RegisterFirstStep from "@/components/authentication/RegisterFirstStep.vue";
import RegisterSecondStep from "@/components/authentication/RegisterSecondStep.vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions } from "pinia";

export default defineComponent({
  name: "UserRegister",
  components: {
    SectionContainer,
    SectionTitleSecondary,
    RegisterFirstStep,
    RegisterSecondStep,
    ErrorMessage,
  },
  data() {
    return {
      step: 1,
      form: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
      },
      privacyPolicy: "",
      registerError: null,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["register"]),
    onFirstStepForm(data) {
      this.form.email = data.email;
      this.form.password = data.password;
      this.step++;
    },
    async onSecondStepForm(data) {
      this.form.first_name = data.firstName;
      this.form.last_name = data.lastName;
      this.form.date_of_birth = data.birthDay;
      this.privacyPolicy = data.privacyPolicy;
      try {
        await this.register(this.form);
        this.$router.push({ name: "HomePage" });
      } catch (error) {
        this.registerError =
          error.message || "An error occurred while registering";
      }
    },
  },
  metaInfo() {
    return {
      title: "Montecinema | Register",
    };
  },
});
</script>

<template>
  <section class="register">
    <SectionContainer class="register__container">
      <SectionTitleSecondary
        v-if="step === 1"
        title="Ahoy you!"
        subtitle="Care to register?"
        class="register__title"
      />
      <SectionTitleSecondary
        v-if="step === 2"
        title="Great!"
        subtitle="Now your name"
        class="register__title"
      />
      <ErrorMessage v-if="registerError">{{ registerError }}</ErrorMessage>
      <div class="register__step">
        <div v-if="step === 1" class="register__step-inputs">
          <RegisterFirstStep @firstStepCompleted="onFirstStepForm" />
        </div>
        <div v-if="step === 2" class="register__step-inputs">
          <RegisterSecondStep @secondStepCompleted="onSecondStepForm" />
        </div>
      </div>
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
}

.register__title {
  padding-top: 64px;
}
</style>
