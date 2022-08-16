<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLink",
  props: {
    colorTheme: {
      type: String,
      validator(value) {
        return [
          "accent-filled",
          "accent-empty",
          "accent-text",
          "light-filled",
          "light-empty",
          "dark-filled",
          "dark-empty",
        ].includes(value);
      },
    },
  },
});
</script>

<template>
  <a class="link" :class="colorTheme"><slot></slot></a>
</template>

<style lang="scss" scoped>
.link {
  @include button;
}

.link.accent-text {
  @include buttonAccentText;
}
.link.accent-filled {
  @include buttonAccentFilled;
}
.link.light-filled {
  @include buttonLightFilled;
}
</style>
