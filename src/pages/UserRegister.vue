<script>
import { defineComponent } from "vue";
import regex from "@/assets/utils/regex.js";
import isAdult from "@/assets/utils/birthDayValidation.js";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";
import BaseInput from "@/components/global/BaseInput.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import EyeIcon from "@/assets/images/eye.svg";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";
import BaseCheckbox from "@/components/global/BaseCheckbox.vue";

export default defineComponent({
  name: "UserRegister",
  components: {
    SectionContainer,
    SectionTitleSecondary,
    BaseInput,
    BaseButton,
    EyeIcon,
    InputErrorMessage,
    BaseCheckbox,
  },
  data() {
    return {
      step: 1,
      email: "",
      emailTouched: false,
      password: "",
      passwordTouched: false,
      passwordInputType: "password",
      firstName: "",
      firstNameTouched: false,
      lastName: "",
      lastNameTouched: false,
      birthDay: "",
      birthDayTouched: false,
      privacyPolicy: false,
    };
  },
  computed: {
    emailError() {
      if (!this.email && !this.emailTouched) return "";
      if (!this.email && this.emailTouched) return "Please enter your email";
      if (!regex.email.test(this.email)) return "Please enter correct email";
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
    disableNextStepButton() {
      if (
        !this.email ||
        !this.password ||
        this.emailError ||
        this.passwordError
      )
        return true;
      return false;
    },
    firstNameError() {
      if (!this.firstName && !this.firstNameTouched) return "";
      if (!this.firstName && this.firstNameTouched)
        return "Please enter your first name";
      if (!regex.name.test(this.firstName))
        return "Please enter correct first name";
      return "";
    },
    lastNameError() {
      if (!this.lastName && !this.lastNameTouched) return "";
      if (!this.lastName && this.lastNameTouched)
        return "Please enter your last name";
      if (!regex.name.test(this.lastName))
        return "Please enter correct last name";
      return "";
    },
    birthDayError() {
      if (!this.birthDay && !this.birthDayTouched) return "";
      if (!this.birthDay && this.birthDayTouched) return "error";
      if (!isAdult(this.birthDay)) return "error";
      return "";
    },
    isFormValid() {
      if (
        this.email &&
        !this.emailError &&
        this.password &&
        !this.passwordError &&
        this.firstName &&
        !this.firstNameError &&
        this.lastName &&
        !this.lastNameError &&
        this.birthDay &&
        !this.birthDayError &&
        this.privacyPolicy
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
      this.firstName = "";
      this.firstNameTouched = false;
      this.lastName = "";
      this.lastNameTouched = false;
      this.birthDay = "";
      this.birthDayTouched = false;
      this.privacyPolicy = false;
    },
    onSubmit() {
      if (this.isFormValid) {
        // send data to api
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

      <form class="register__form" novalidate @submit.prevent="onSubmit">
        <div class="register__step">
          <div v-if="step === 1" class="register__step-inputs">
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
                getValidationClass(
                  password,
                  passwordTouched,
                  passwordErrorLetter
                )
              "
              inputError="At least one letter"
            />
            <InputErrorMessage
              :class="
                getValidationClass(
                  password,
                  passwordTouched,
                  passwordErrorDigit
                )
              "
              inputError="At least one digit"
            />
          </div>
          <div v-if="step === 2" class="register__step-inputs">
            <BaseInput
              class="register__name"
              :class="{ error: firstNameError }"
              inputType="text"
              name="name"
              label="First name"
              placeholder="e.g. Jessica"
              v-model="firstName"
              @blur="firstNameTouched = true"
            ></BaseInput>
            <InputErrorMessage
              v-if="firstNameError"
              class="register__name error"
              :inputError="firstNameError"
            />

            <BaseInput
              class="register__surname"
              :class="{ error: lastNameError }"
              inputType="text"
              name="surname"
              label="Last name"
              placeholder="e.g. Walton"
              v-model="lastName"
              @blur="lastNameTouched = true"
            ></BaseInput>
            <InputErrorMessage
              v-if="lastNameError"
              class="register__surname error"
              :inputError="lastNameError"
            />

            <BaseInput
              class="register__birthday"
              :class="birthDayError"
              inputType="date"
              name="birthday"
              label="Date of birth"
              placeholder="DD/MM/YYYY"
              v-model="birthDay"
              @blur="birthDayTouched = true"
            ></BaseInput>
            <InputErrorMessage
              :class="
                getValidationClass(birthDay, birthDayTouched, birthDayError)
              "
              inputError="You should be minium 18 years old"
            />

            <BaseCheckbox
              class="register__privacy"
              :class="{ checked: privacyPolicy }"
              inputType="checkbox"
              name="privacy"
              label="I accept"
              v-model="privacyPolicy"
              ><a href="#" class="privacy__link"
                >Privacy Policy</a
              ></BaseCheckbox
            >
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
              v-if="step === 1"
              type="button"
              size="large"
              colorTheme="accent-filled"
              class="step"
              :disabled="disableNextStepButton"
              @click="step++"
              >Next Step</BaseButton
            >
            <BaseButton
              v-if="step === 2"
              type="submit"
              size="large"
              colorTheme="accent-filled"
              class="register"
              :disabled="!isFormValid"
              >Register</BaseButton
            >
          </div>
        </div>
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
}

.register__form {
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
.button.step,
.button.register {
  width: 327px;
  @include mediumScreen {
    width: 228px;
  }
}
.button.login {
  padding: 19px 30px;
}

.privacy__link {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: $colorGreyCharade;
  cursor: pointer;
  text-decoration: underline;
}
</style>
