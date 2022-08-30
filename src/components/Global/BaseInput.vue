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
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<template>
  <div class="input__wrapper" :class="$attrs.class">
    <label class="input__label" :class="$attrs.class" for="name">{{
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
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.input__wrapper {
  border: 1px solid blue;
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
  line-height: 18px;
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
  line-height: 21px;
  color: $colorGreyJumbo;
  padding: 24px 16px 24px 24px;
}
</style>
