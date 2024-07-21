<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ErrorMessage",
});
</script>

<template>
  <div class="error__message"><slot /></div>
</template>

<style lang="scss" scoped>
.error__message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  color: $colorRedCherry;
}
</style>
