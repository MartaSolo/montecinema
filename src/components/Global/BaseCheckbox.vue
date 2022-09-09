<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCheckbox",
  props: {
    modelValue: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
});
</script>

<template>
  <div class="input__wrapper">
    <label class="input__label" :class="$attrs.class" :for="name">
      <input
        class="input__checkbox"
        :class="$attrs.class"
        type="checkbox"
        :id="name"
        :name="name"
        :value="modelValue"
        @input="updateValue"
      />{{ label }}</label
    ><slot />
  </div>
</template>

<style lang="scss" scoped>
.input__wrapper {
  padding-top: 25px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.input__label {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: $colorGreyCharade;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
}
.input__checkbox {
  -webkit-appearance: none;
  appearance: none;
  background-color: $colorWhiteSnow;
  margin: 0;
  color: currentColor;
  width: 24px;
  height: 24px;
  border: 1px solid $colorGreyBombay;
  border-radius: 9px;
  position: relative;
  cursor: pointer;
  &.checked::before {
    content: "";
    position: absolute;
    top: -3%;
    left: -4%;
    width: 24px;
    height: 24px;
    background-image: url("@/assets/images/checked.svg");
    background-size: contain;
  }
}
</style>
