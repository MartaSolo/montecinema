<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import { useRouter } from "vue-router";
import regex from "@/utils/regex.js";
import isAdult from "@/utils/birthDayValidation.js";
import EyeIcon from "@/assets/images/eye.svg";
import BaseInput from "@/components/global/BaseInput.vue";
import InputErrorMessage from "@/components/authentication/InputErrorMessage.vue";
import BaseButton from "@/components/global/BaseButton.vue";

const authStore = useAuthStore();
const { currentUser, updateUserStatus } = storeToRefs(authStore);

interface UpdatedUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
  newPassword: string;
}

const router = useRouter();

const updatedUser = ref<UpdatedUser>({
  email: currentUser.value?.email,
  password: "",
  newPassword: "",
  firstName: currentUser.value?.first_name,
  lastName: currentUser.value?.last_name,
  birthday: currentUser.value?.date_of_birth,
});

const passwordTouched = ref(false);
const passwordInputType = ref("password");
const showNewPassword = ref(false);
const newPasswordTouched = ref(false);
const newPasswordInputType = ref("password");
const birthdayTouched = ref(false);

const togglePasswordInputType = () => {
  return passwordInputType.value === "password"
    ? (passwordInputType.value = "text")
    : (passwordInputType.value = "password");
};

const toggleNewPasswordInputType = () => {
  return newPasswordInputType.value === "password"
    ? (newPasswordInputType.value = "text")
    : (newPasswordInputType.value = "password");
};

const toggleNewPassword = () => {
  return (showNewPassword.value = !showNewPassword.value);
};

const emailError = () => {
  if (!updatedUser.value.email) return "Please enter your email";
  if (!regex.email.test(updatedUser.value.email))
    return "Please enter correct email";
  return "";
};

const passwordError = () => {
  if (!updatedUser.value.password && !passwordTouched.value) return "";
  if (!updatedUser.value.password && passwordTouched.value)
    return "Please enter your password";
  if (updatedUser.value.password.length < 8 && passwordTouched.value)
    return "At least 8 characters";
  return "";
};

const newPasswordError = () => {
  if (!updatedUser.value.newPassword && !newPasswordTouched.value) return "";
  if (!updatedUser.value.newPassword && newPasswordTouched.value)
    return "Please enter your password";
  if (
    updatedUser.value.newPassword.length < 8 ||
    !regex.oneLetter.test(updatedUser.value.newPassword) ||
    !regex.oneDigit.test(updatedUser.value.newPassword)
  )
    return "At least 8 characters, one letter and one digit";
  return "";
};

const firstNameError = () => {
  if (!updatedUser.value.firstName) return "Please enter your first name";
  if (!regex.name.test(updatedUser.value.firstName))
    return "Please enter correct first name";
  return "";
};

const lastNameError = () => {
  if (!updatedUser.value.lastName) return "Please enter your last name";
  if (!regex.name.test(updatedUser.value.lastName))
    return "Please enter correct last name";
  return "";
};

const birthdayError = () => {
  if (!updatedUser.value.birthday) return "error";
  if (!isAdult(updatedUser.value.birthday) && birthdayTouched.value)
    return "error";
  if (isAdult(updatedUser.value.birthday) && birthdayTouched.value)
    return "correct";
  return "";
};

const isFormValid = () => {
  let isValid = false;
  if (
    updatedUser.value.email &&
    !emailError() &&
    updatedUser.value.password &&
    !passwordError() &&
    updatedUser.value.firstName &&
    !firstNameError() &&
    updatedUser.value.lastName &&
    !lastNameError() &&
    updatedUser.value.birthday
  )
    isValid = true;
  if (birthdayTouched.value && birthdayError() === "error") isValid = false;
  if (
    (showNewPassword.value && !updatedUser.value.newPassword) ||
    (showNewPassword.value && newPasswordError())
  )
    isValid = false;
  return isValid;
};

const onSubmit = () => {
  if (isFormValid()) {
    authStore.updateUserData(updatedUser.value);
  } else {
    return;
  }
};

router.afterEach((to, from) => {
  authStore.clearUpdateStatus();
});
</script>

<template>
  <div class="user__details">
    <form class="user__form" @submit.prevent="onSubmit">
      <BaseInput
        class="account__email"
        :class="{ error: emailError() }"
        inputType="email"
        name="email"
        label="email"
        v-model="updatedUser.email"
      ></BaseInput>
      <InputErrorMessage
        v-if="emailError()"
        class="account__email error"
        :inputError="emailError()"
      />

      <BaseInput
        class="account__password"
        :class="{ error: passwordError() }"
        :inputType="passwordInputType"
        name="password"
        label="password"
        placeholder="Your current password"
        v-model="updatedUser.password"
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
        v-if="passwordError()"
        class="account__password error"
        :inputError="passwordError()"
      />

      <BaseInput
        v-if="showNewPassword"
        class="account__password-new"
        :class="{ error: newPasswordError() }"
        inputType="password"
        name="new_password"
        label="new password"
        placeholder="Your new password"
        v-model="updatedUser.newPassword"
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
        v-if="newPasswordError() && showNewPassword"
        class="account__password-new error"
        :inputError="newPasswordError()"
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
        :class="{ error: firstNameError() }"
        inputType="text"
        name="name"
        label="First name"
        v-model="updatedUser.firstName"
      ></BaseInput>
      <InputErrorMessage
        v-if="firstNameError()"
        class="account__name error"
        :inputError="firstNameError()"
      />

      <BaseInput
        class="account__surname"
        :class="{ error: lastNameError() }"
        inputType="text"
        name="surname"
        label="Last name"
        v-model="updatedUser.lastName"
      ></BaseInput>
      <InputErrorMessage
        v-if="lastNameError()"
        class="account__name error"
        :inputError="lastNameError()"
      />

      <BaseInput
        class="account__birthday"
        :class="birthdayError()"
        inputType="date"
        name="birthday"
        label="Date of birth"
        v-model="updatedUser.birthday"
        @blur="birthdayTouched = true"
      ></BaseInput>
      <InputErrorMessage
        :class="birthdayError()"
        inputError="You should be minium 18 years old"
      />

      <BaseButton
        size="large"
        colorTheme="light-empty"
        class="account__button-save"
        type="submit"
        :disabled="!isFormValid()"
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
