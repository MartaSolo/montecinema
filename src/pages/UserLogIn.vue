<script>
import { defineComponent } from "vue";
import regex from "@/utils/regex.js";
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import BaseInput from "@/components/global/BaseInput.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import EyeIcon from "@/assets/images/eye.svg";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";

export default defineComponent({
  name: "UserLogIn",
  components: {
    SectionContainer,
    SectionTitleSecondary,
    BaseInput,
    BaseButton,
    EyeIcon,
    InputErrorMessage,
  },
  data() {
    return {
      email: "",
      emailTouched: false,
      password: "",
      passwordTouched: false,
      passwordInputType: "password",
      loginError: null,
    };
  },
  computed: {
    emailError() {
      if (!this.email && !this.emailTouched) return "";
      if (!this.email && this.emailTouched) return "Please enter your email";
      if (this.emailTouched && !regex.email.test(this.email))
        return "Please enter correct email";
      return "";
    },
    passwordError() {
      if (!this.password && !this.passwordTouched) return "";
      if (!this.password && this.passwordTouched)
        return "Please enter your password";
      return "";
    },
    isFormValid() {
      if (
        this.email &&
        !this.emailError &&
        this.password &&
        !this.passwordError
      )
        return true;
      return false;
    },
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    togglePasswordInputType() {
      return this.passwordInputType === "password"
        ? (this.passwordInputType = "text")
        : (this.passwordInputType = "password");
    },
    resetState() {
      this.email = "";
      this.emailTouched = false;
      this.password = "";
      this.passwordTouched = false;
    },
    async onSubmit() {
      if (this.isFormValid) {
        try {
          await this.login({ email: this.email, password: this.password });
        } catch (error) {
          this.loginError = error;
        }
        this.resetState();
        this.$router.back();
      } else {
        return;
      }
    },
  },
});
</script>

<template>
  <section class="login">
    <SectionContainer class="login__container">
      <SectionTitleSecondary
        title="Hi there!"
        subtitle="Care to log in?"
        class="login__title"
      />

      <form class="login__form" novalidate @submit.prevent="onSubmit">
        <div class="login__inputs">
          <BaseInput
            class="login__email"
            :class="{ error: emailError }"
            inputType="email"
            name="email"
            label="email"
            placeholder="name.surname@monterail.com"
            v-model="email"
            @blur="emailTouched = true"
          />
          <InputErrorMessage
            v-if="emailError"
            class="login__email error"
            :inputError="emailError"
          />

          <BaseInput
            class="login__password"
            :class="{ error: passwordError }"
            :inputType="passwordInputType"
            name="password"
            label="password"
            placeholder="Enter your password"
            v-model="password"
            @blur="passwordTouched = true"
          >
            <BaseButton
              type="button"
              class="button__icon"
              @click="togglePasswordInputType"
            >
              <EyeIcon class="eye__icon"
            /></BaseButton>
          </BaseInput>
          <InputErrorMessage
            v-if="passwordError"
            class="login__email error"
            :inputError="passwordError"
          />
        </div>
        <div class="login__step-buttons">
          <BaseButton
            :to="{ name: 'UserRegister' }"
            size="large"
            colorTheme="accent-text"
            class="register"
            >Register instead</BaseButton
          >
          <BaseButton
            type="submit"
            size="large"
            colorTheme="accent-filled"
            class="login"
            :disabled="!isFormValid"
            >Log in</BaseButton
          >
        </div>
      </form>
      <div class="login__reset">
        <p class="login__reset-text">Did you forget your password?</p>
        <BaseButton
          size="medium"
          colorTheme="accent-text"
          class="login__reset-button"
          >Reset it now</BaseButton
        >
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.login__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 0 0 124px 0;
}

.login__form {
  max-width: 600px;
  padding: 16px 0 48px 0;
  @include mediumScreen {
    border-radius: 24px;
    padding: 64px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  }
}
.login__title {
  padding-top: 64px;
}

.button__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: $colorGreyAthens;
  padding: 0;
  position: absolute;
  top: 33%;
  right: 2%;
  border: 1px solid $colorGreyAthens;
  &:focus {
    border: 1px solid $colorInputActiveBorder;
    outline: none;
  }
}
.login__password.error {
  .button__icon {
    top: 40%;
  }
}

.login__step-buttons {
  margin-top: 48px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @include mediumScreen {
    flex-direction: row;
  }
}

.button.login,
.button.register {
  width: 327px;
  @include mediumScreen {
    width: 228px;
  }
}
.button.register {
  padding: 19px 20px;
}

.login__reset {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @include mediumScreen {
    align-self: flex-start;
  }
}
.login__reset-text {
  margin: 0;
  font-size: 1rem;
}
.login__reset-button {
  padding: 0 0 0 8px;
  font-family: $fontPrimary;
  height: 16px;
  font-size: 1rem;
  border: none;
  &:hover {
    border: none;
    text-decoration: underline;
  }
}
</style>
