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
      <span class="input__icon" :class="$attrs.class"></span>
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
.input__icon {
  width: 24px;
  height: 24px;
  border: 1px solid $colorGreyBombay;
  border-radius: 9px;
  cursor: pointer;
  &.checked {
    background-image: url("@/assets/images/checked.svg");
    background-size: contain;
    border: 1px solid $colorRedBittersweet;
  }
}
.input__checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
</style>
