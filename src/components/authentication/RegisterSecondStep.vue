<script>
import { defineComponent } from "vue";
import regex from "@/assets/utils/regex.js";
import isAdult from "@/assets/utils/birthDayValidation.js";
import BaseInput from "@/components/global/BaseInput.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";
import BaseCheckbox from "@/components/global/BaseCheckbox.vue";

export default defineComponent({
  name: "RegisterSecondStep",
  components: {
    BaseInput,
    BaseButton,
    InputErrorMessage,
    BaseCheckbox,
  },
  emits: ["secondStepCompleted"],
  data() {
    return {
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
    firstNameError() {
      if (!this.firstName && !this.firstNameTouched) return "";
      if (!this.firstName && this.firstNameTouched)
        return "Please enter your first name";
      if (this.firstNameTouched && !regex.name.test(this.firstName))
        return "Please enter correct first name";
      return "";
    },
    lastNameError() {
      if (!this.lastName && !this.lastNameTouched) return "";
      if (!this.lastName && this.lastNameTouched)
        return "Please enter your last name";
      if (this.lastNameTouched && !regex.name.test(this.lastName))
        return "Please enter correct last name";
      return "";
    },
    birthDayError() {
      if (!this.birthDay && !this.birthDayTouched) return "";
      if (!this.birthDay && this.birthDayTouched) return "error";
      if (!isAdult(this.birthDay)) return "error";
      if (isAdult(this.birthDay)) return "correct";
      return "";
    },
    isFormValid() {
      if (
        this.firstName &&
        !this.firstNameError &&
        this.lastName &&
        !this.lastNameError &&
        this.birthDay &&
        this.birthDayError === "correct" &&
        this.privacyPolicy
      )
        return true;
      return false;
    },
  },
  methods: {
    resetState() {
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
        this.$emit("secondStepCompleted", {
          firstName: this.firstName,
          lastName: this.lastName,
          birthDay: this.birthDay,
          privacyPolicy: this.privacyPolicy,
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
            :class="birthDayError"
            inputError="You should be minium 18 years old"
          />

          <BaseCheckbox
            class="register__privacy"
            :class="{ checked: privacyPolicy }"
            inputType="checkbox"
            name="privacy"
            label="I accept"
            v-model="privacyPolicy"
            ><a href="#" class="privacy__link">Privacy Policy</a></BaseCheckbox
          >
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
            class="register"
            :disabled="!isFormValid"
            >Register</BaseButton
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
