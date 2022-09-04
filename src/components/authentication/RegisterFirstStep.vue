<script>
import { defineComponent } from "vue";
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
      password: "",
      passwordInputType: "password",
    };
  },
  methods: {
    togglePasswordInputType() {
      return this.passwordInputType === "password"
        ? (this.passwordInputType = "text")
        : (this.passwordInputType = "password");
    },
  },
});
</script>

<template>
  <div class="register__step">
    <div class="register__step-inputs">
      <BaseInput
        class="register__email"
        inputType="email"
        name="email"
        label="email"
        placeholder="name.surname@monterail.com"
        v-model="email"
      ></BaseInput>
      <InputErrorMessage
        class="register__email"
        inputError="Please enter correct email"
      />

      <BaseInput
        class="register__password"
        :inputType="passwordInputType"
        name="password"
        label="password"
        placeholder="Enter your password"
        v-model="password"
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
        inputError="At least 8 characters"
      />
      <InputErrorMessage
        class="register__password letter"
        inputError="At least one letter"
      />
      <InputErrorMessage
        class="register__password digit"
        inputError="At least one digit"
      />
    </div>
    <div class="register__step-buttons">
      <BaseButton
        :to="{ name: UserLogIn }"
        size="large"
        colorTheme="accent-text"
        class="login"
        >Log in instead</BaseButton
      >
      <BaseButton size="large" colorTheme="accent-filled" class="step"
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
