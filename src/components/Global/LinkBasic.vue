<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LinkBasic",
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    colorTheme: {
      type: String,
      default: "red-white",
    },
  },
  computed: {
    classes() {
      return [`link link__${this.colorTheme}`];
    },
  },
});
</script>

<template>
  <a href="url" :class="classes">{{ text }}</a>
</template>

<style lang="scss" scoped>
.link {
  @include button;
}
.link.register,
.link.login,
.link.account {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    @include buttonMedium;
  }
}
.link.login {
  @include mediumScreen {
    margin-left: 1rem;
  }
}
.link.account {
  @include mediumScreen {
    width: 165px;
  }
}
.link__accent-text {
  @include buttonAccentText;
}
.link__accent-filled {
  @include buttonAccentFilled;
}
.link__light-filled {
  @include buttonLightFilled;
}
</style>
