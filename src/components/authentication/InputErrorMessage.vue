<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "InputErrorMessage",
  props: {
    inputError: {
      type: String,
    },
  },
});
</script>

<template>
  <div class="input__error-message">{{ inputError }}</div>
</template>

<style lang="scss" scoped>
.input__error-message {
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: 400;
}
.input__error-message.error {
  color: $colorRedCherry;
}
.input__error-message.correct {
  color: $colorInputCorrect;
}
</style>
