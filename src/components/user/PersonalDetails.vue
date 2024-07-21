<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import regex from "@/utils/regex.js";
import isAdult from "@/utils/birthDayValidation.js";
import EyeIcon from "@/assets/images/eye.svg";
import BaseInput from "@/components/global/BaseInput.vue";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";
import BaseButton from "@/components/global/BaseButton.vue";

import { Credentials } from "@/types";

const { updateUserData, clearUpdateStatus } = useAuthStore();
const { user, updateUserStatus } = storeToRefs(useAuthStore());

const router = useRouter();

const updatedUser = reactive<Credentials>({
  email: user.value?.email || "",
  password: "",
  first_name: user.value?.first_name || "",
  last_name: user.value?.last_name || "",
  date_of_birth: user.value?.date_of_birth || "",
  current_password: "",
});

const currentPasswordTouched = ref(false);
const currentPasswordInputType = ref("password");
const showNewPassword = ref(false);
const newPasswordTouched = ref(false);
const newPasswordInputType = ref("password");
const birthdayTouched = ref(false);

const togglePasswordInputType = () => {
  return currentPasswordInputType.value === "password"
    ? (currentPasswordInputType.value = "text")
    : (currentPasswordInputType.value = "password");
};

const toggleNewPasswordInputType = () => {
  return newPasswordInputType.value === "password"
    ? (newPasswordInputType.value = "text")
    : (newPasswordInputType.value = "password");
};

const toggleNewPassword = () => {
  return (showNewPassword.value = !showNewPassword.value);
};

const emailError = computed(() => {
  if (!updatedUser.email) return "Please enter your email";
  if (!regex.email.test(updatedUser.email)) return "Please enter correct email";
  return "";
});

const currentPasswordError = computed(() => {
  if (!updatedUser.current_password && !currentPasswordTouched.value) return "";
  if (!updatedUser.current_password && currentPasswordTouched.value)
    return "Please enter your password";
  if (updatedUser.current_password.length < 8 && currentPasswordTouched.value)
    return "At least 8 characters";
  return "";
});

const newPasswordError = computed(() => {
  if (!updatedUser.password && !newPasswordTouched.value) return "";
  if (!updatedUser.password && newPasswordTouched.value)
    return "Please enter your password";
  if (
    updatedUser.current_password.length < 8 ||
    !regex.oneLetter.test(updatedUser.password) ||
    !regex.oneDigit.test(updatedUser.password)
  )
    return "At least 8 characters, one letter and one digit";
  return "";
});

const firstNameError = computed(() => {
  if (!updatedUser.first_name) return "Please enter your first name";
  if (!regex.name.test(updatedUser.first_name))
    return "Please enter correct first name";
  return "";
});

const lastNameError = computed(() => {
  if (!updatedUser.last_name) return "Please enter your last name";
  if (!regex.name.test(updatedUser.last_name))
    return "Please enter correct last name";
  return "";
});

const birthdayError = computed(() => {
  if (!updatedUser.date_of_birth) return "error";
  if (!isAdult(updatedUser.date_of_birth) && birthdayTouched.value)
    return "error";
  if (isAdult(updatedUser.date_of_birth) && birthdayTouched.value)
    return "correct";
  return "";
});

const isFormValid = computed(() => {
  let isValid = false;
  if (
    updatedUser.email &&
    !emailError.value &&
    updatedUser.current_password &&
    !currentPasswordError.value &&
    updatedUser.first_name &&
    !firstNameError.value &&
    updatedUser.last_name &&
    !lastNameError.value &&
    updatedUser.date_of_birth
  )
    isValid = true;
  if (birthdayTouched.value && birthdayError.value === "error") isValid = false;
  if (!updatedUser.password && newPasswordError.value) isValid = false;
  return isValid;
});

const onSubmit = () => {
  if (isFormValid.value) {
    updateUserData(updatedUser);
  } else {
    return;
  }
};

router.afterEach((to, from) => {
  clearUpdateStatus();
});
</script>

<template>
  <div class="user__details">
    <form class="user__form" @submit.prevent="onSubmit">
      <BaseInput
        class="account__email"
        :class="{ error: emailError }"
        inputType="email"
        name="email"
        label="email"
        v-model="updatedUser.email"
      ></BaseInput>
      <InputErrorMessage
        v-if="emailError"
        class="account__email error"
        :inputError="emailError"
      />

      <BaseInput
        class="account__password"
        :class="{ error: currentPasswordError }"
        :inputType="currentPasswordInputType"
        name="password"
        label="password"
        placeholder="Your current password"
        v-model="updatedUser.current_password"
        @blur="currentPasswordTouched = true"
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
        v-if="currentPasswordError"
        class="account__password error"
        :inputError="currentPasswordError"
      />

      <BaseInput
        v-if="showNewPassword"
        class="account__password-new"
        :class="{ error: newPasswordError }"
        inputType="password"
        name="new_password"
        label="new password"
        placeholder="Your new password"
        v-model="updatedUser.password"
        @blur="newPasswordTouched = true"
      >
        <BaseButton
          type="button"
          class="button__icon"
          @click="toggleNewPasswordInputType"
        >
          <EyeIcon class="eye__icon"
        /></BaseButton>
      </BaseInput>
      <InputErrorMessage
        v-if="newPasswordError && showNewPassword"
        class="account__password-new error"
        :inputError="newPasswordError"
      />

      <BaseButton
        v-if="!showNewPassword"
        size="medium"
        colorTheme="accent-empty"
        class="account__button-password"
        type="button"
        @click="toggleNewPassword"
        >Change password</BaseButton
      >

      <BaseInput
        class="account__name"
        :class="{ error: firstNameError }"
        inputType="text"
        name="name"
        label="First name"
        v-model="updatedUser.first_name"
      ></BaseInput>
      <InputErrorMessage
        v-if="firstNameError"
        class="account__name error"
        :inputError="firstNameError"
      />

      <BaseInput
        class="account__surname"
        :class="{ error: lastNameError }"
        inputType="text"
        name="surname"
        label="Last name"
        v-model="updatedUser.last_name"
      ></BaseInput>
      <InputErrorMessage
        v-if="lastNameError"
        class="account__name error"
        :inputError="lastNameError"
      />

      <BaseInput
        class="account__birthday"
        :class="birthdayError"
        inputType="date"
        name="birthday"
        label="Date of birth"
        v-model="updatedUser.date_of_birth"
        @blur="birthdayTouched = true"
      ></BaseInput>
      <InputErrorMessage
        :class="birthdayError"
        inputError="You should be minium 18 years old"
      />

      <BaseButton
        size="large"
        colorTheme="light-empty"
        class="account__button-save"
        type="submit"
        :disabled="!isFormValid"
        >Save changes</BaseButton
      >
    </form>
    <div v-if="updateUserStatus" class="update__messages">
      <div v-if="updateUserStatus === 204" class="message__success">
        Your personal data have been updated successfully.
      </div>
      <div v-else class="message__failure">
        We are sorry, but your personal data have not been updated.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user__details {
  width: 327px;
  display: flex;
  flex-direction: column;
  @include mediumScreen {
    width: 472px;
  }
}
.button__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: $colorGreyAthens;
  padding: 0;
  position: absolute;
  top: 32%;
  right: 3%;
  border: 1px solid $colorGreyAthens;
  &:focus {
    border: 1px solid $colorInputActiveBorder;
    outline: none;
  }
}

.account__password.error .button__icon {
  top: 42%;
  right: 3%;
}
.account__password-new.error .button__icon {
  top: 40%;
  right: 3%;
}

.account__button-password {
  margin-bottom: 24px;
}
.account__button-save {
  width: 327px;
  margin: 48px 0 22px 0;
  @include mediumScreen {
    margin: 40px 0 0 0;
    width: 472px;
  }
}

.message__success,
.message__failure {
  font-size: 1.1rem;
  text-align: center;
  margin-top: 16px;
  color: $colorRedCherry;
  @include mediumScreen {
    text-align: left;
  }
}
.message__success {
  color: $colorInputCorrect;
}
</style>
