<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      error: null,
      instance: null,
      info: null,
    };
  },
  computed: {
    errorMessage() {
      return this.error?.message
        ? this.error.message
        : "We are sorry, but some error occured.";
    },
  },
  errorCaptured(error, instance, info) {
    this.error = error;
    this.instance = instance;
    this.info = info;
  },
});
</script>

<template>
  <router-view name="Header"></router-view>
  <router-view></router-view>
  <div v-if="error" class="error__wrapper">
    <p class="error__message">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss" scoped>
.error__wrapper {
  background-color: $colorRedCherry;
}
.error__message {
  font-weight: 700;
  font-size: 1.5rem;
  color: $colorWhiteSnow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 16px;
}
</style>
