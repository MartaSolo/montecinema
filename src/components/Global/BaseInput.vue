<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
    },
    inputType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  emits: ["update:modelValue", "blur"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<template>
  <div class="input__wrapper">
    <label class="input__label" :class="$attrs.class" :for="name">{{
      label
    }}</label>
    <input
      class="input__input"
      :class="$attrs.class"
      :type="inputType"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      @blur="$emit('blur', $event)"
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input__wrapper {
  display: flex;
  flex-direction: column;
  width: 327px;
  @include mediumScreen {
    width: 472px;
  }
}
.input__label {
  font-family: $fontSecondary;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.1rem;
  text-transform: uppercase;
  color: $colorRedBittersweet;
  padding-bottom: 12px;
}
.input__input {
  background-color: $colorGreyAthens;
  border-radius: 8px;
  border: 1px solid $colorGreyAthens;
  font-family: $fontPrimary;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: $colorGreyJumbo;
  padding: 17px;
  margin-bottom: 8px;
  &:focus {
    background-color: $colorInputActiveBg;
    outline: none;
    border: 1px solid $colorInputActiveBorder;
  }
  &::placeholder {
    font-family: $fontPrimary;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.3rem;
    color: $colorGreyJumbo;
  }
}

.input__input.error {
  border: 1px solid $colorRedCherry;
}

.input__input.register__email,
.input__input.register__name,
.input__input.register__surname,
.input__input.login__email,
.input__input.login__password,
.input__input.account__email,
.input__input.account__name,
.input__input.account__surname,
.input__input.account__password,
.input__input.account__password-new {
  margin-bottom: 32px;
  &.error {
    margin-bottom: 8px;
  }
}

.input__wrapper.register__password,
.input__wrapper.login__password,
.input__wrapper.account__password,
.input__wrapper.account__password-new {
  position: relative;
}

.input__label.register__password {
  margin-top: 8px;
}
</style>
