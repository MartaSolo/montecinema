<script>
import { defineComponent } from "vue";
import regex from "@/assets/utils/regex.js";
import BaseInput from "@/components/global/BaseInput.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import EyeIcon from "@/assets/images/eye.svg";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";

export default defineComponent({
  name: "RegisterFirstStep",
  components: {
    BaseInput,
    BaseButton,
    EyeIcon,
    InputErrorMessage,
  },
  emits: ["firstStepCompleted"],
  data() {
    return {
      email: "",
      emailTouched: false,
      password: "",
      passwordTouched: false,
      passwordInputType: "password",
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
    passwordErrorCharacters() {
      return this.password.length < 8;
    },
    passwordErrorLetter() {
      return !regex.oneLetter.test(this.password);
    },
    passwordErrorDigit() {
      return !regex.oneDigit.test(this.password);
    },
    passwordError() {
      if (!this.password && !this.passwordTouched) return "";
      if (!this.password && this.passwordTouched) return "error";
      if (
        this.passwordErrorCharacters ||
        this.passwordErrorLetter ||
        this.passwordErrorDigit
      )
        return "error";
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
    togglePasswordInputType() {
      return this.passwordInputType === "password"
        ? (this.passwordInputType = "text")
        : (this.passwordInputType = "password");
    },
    getValidationClass(state, stateTouched, error) {
      if (!state && !stateTouched) return "";
      if (!state && stateTouched) return "error";
      if (state && error) return "error";
      if (state && !error) return "correct";
    },
    resetState() {
      this.email = "";
      this.emailTouched = false;
      this.password = "";
      this.passwordTouched = false;
    },
    onSubmit() {
      if (this.isFormValid) {
        this.$emit("firstStepCompleted", {
          email: this.email,
          password: this.password,
        });
        this.resetState();
      } else {
        return;
      }
    },
  },
});
</script>

<template>
  <section class="register">
    <form class="register__form" novalidate @submit.prevent="onSubmit">
      <div class="register__step">
        <div class="register__step-inputs">
          <BaseInput
            class="register__email"
            :class="{ error: emailError }"
            inputType="email"
            name="email"
            label="email"
            placeholder="name.surname@monterail.com"
            v-model="email"
            @blur="emailTouched = true"
          ></BaseInput>
          <InputErrorMessage
            v-if="emailError"
            class="register__email error"
            :inputError="emailError"
          />

          <BaseInput
            class="register__password"
            :class="passwordError"
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
            :class="
              getValidationClass(
                password,
                passwordTouched,
                passwordErrorCharacters
              )
            "
            inputError="At least 8 characters"
          />
          <InputErrorMessage
            :class="
              getValidationClass(password, passwordTouched, passwordErrorLetter)
            "
            inputError="At least one letter"
          />
          <InputErrorMessage
            :class="
              getValidationClass(password, passwordTouched, passwordErrorDigit)
            "
            inputError="At least one digit"
          />
        </div>

        <div class="register__buttons">
          <BaseButton
            :to="{ name: 'UserLogIn' }"
            size="large"
            colorTheme="accent-text"
            class="login"
            >Log in instead</BaseButton
          >
          <BaseButton
            type="submit"
            size="large"
            colorTheme="accent-filled"
            class="step"
            :disabled="!isFormValid"
            >Next Step</BaseButton
          >
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.register__form {
  max-width: 600px;
  padding: 16px 0 48px 0;
  @include mediumScreen {
    border-radius: 24px;
    padding: 64px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  }
}

.button__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: $colorGreyAthens;
  padding: 0;
  position: absolute;
  top: 46%;
  right: 3%;
  border: 1px solid $colorGreyAthens;
  &:focus {
    border: 1px solid $colorInputActiveBorder;
    outline: none;
  }
}

.register__buttons {
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
.button.step {
  width: 327px;
  @include mediumScreen {
    width: 228px;
  }
}
.button.login {
  padding: 19px 30px;
}
</style>
