<script>
import { defineComponent } from "vue";
import regex from "@/assets/utils/regex.js";
import BaseInput from "@/components/global/BaseInput.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import EyeIcon from "@/assets/images/eye.svg";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";

export default defineComponent({
  name: "RegisterFirstStep",
  components: { BaseInput, BaseButton, EyeIcon, InputErrorMessage },
  data() {
    return {
      email: "",
      emailTouched: false,
      password: "",
      passwordTouched: false,
      passwordInputType: "password",
      // step: null,
    };
  },
  computed: {
    emailError() {
      if (!this.email && !this.emailTouched) {
        return "";
      }
      if (!this.email && this.emailTouched) {
        return "Please enter your email";
      }
      if (!regex.email.test(this.email)) {
        return "Please enter correct email";
      }
      return "";
    },
    passwordErrorCharacters() {
      return this.password.length < 7 ? true : false;
    },
    passwordErrorLetter() {
      return regex.oneLetter.test(this.password) ? false : true;
    },
    passwordErrorDigit() {
      return regex.oneDigit.test(this.password) ? false : true;
    },
    getPasswordErrorClass() {
      if (!this.password && !this.passwordTouched) {
        return "";
      }
      if (!this.password && this.passwordTouched) {
        return "error";
      }
      if (
        this.passwordErrorCharacters ||
        this.passwordErrorLetter ||
        this.passwordErrorDigit
      ) {
        return "error";
      }
      return "";
    },
    disableButton() {
      if (
        !this.email ||
        !this.password ||
        this.emailError ||
        this.getPasswordErrorClass
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    togglePasswordInputType() {
      return this.passwordInputType === "password"
        ? (this.passwordInputType = "text")
        : (this.passwordInputType = "password");
    },
    getValidationClass(state, stateTouched, value) {
      if (!state && !stateTouched) {
        return "";
      }
      if (!state && stateTouched) {
        return "error";
      }
      if (state && value) {
        return "error";
      }
      if (state && !value) {
        return "correct";
      }
    },
  },
});
</script>

<template>
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
        :class="getPasswordErrorClass"
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
        class="register__password characters"
        :class="
          getValidationClass(password, passwordTouched, passwordErrorCharacters)
        "
        inputError="At least 8 characters"
      />
      <InputErrorMessage
        class="register__password letter"
        :class="
          getValidationClass(password, passwordTouched, passwordErrorLetter)
        "
        inputError="At least one letter"
      />
      <InputErrorMessage
        class="register__password digit"
        :class="
          getValidationClass(password, passwordTouched, passwordErrorDigit)
        "
        inputError="At least one digit"
      />
    </div>
    <div class="register__step-buttons">
      <BaseButton
        :to="{ name: 'UserLogIn' }"
        size="large"
        colorTheme="accent-text"
        class="login"
        >Log in instead</BaseButton
      >
      <BaseButton
        size="large"
        colorTheme="accent-filled"
        class="step"
        :disabled="disableButton"
        >Next Step</BaseButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.register__step-buttons {
  border: 1px solid blue;
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
