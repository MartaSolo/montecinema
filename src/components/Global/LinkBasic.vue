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
    class: {
      type: String,
    },
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
  computed: {
    classes() {
      return [`link ${this.class} ${this.colorTheme}`];
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
.link.account,
.link.welcome {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    @include buttonMedium;
  }
}
.link.welcome {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    width: 224px;
    align-self: flex-start;
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
<!-- <script>
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
    class: {
      type: String,
    },
    colorTheme: {
      type: String,
    },
  },
  computed: {
    classes() {
      return [`link ${this.class} ${this.colorTheme}`];
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
.link.account,
.link.welcome {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    @include buttonMedium;
  }
}
.link.welcome {
  @include buttonLarge;
  width: 310px;
  @include mediumScreen {
    width: 224px;
    align-self: flex-start;
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
.link.accent-text {
  @include buttonAccentText;
}
.link.accent-filled {
  @include buttonAccentFilled;
}
.link.light-filled {
  @include buttonLightFilled;
}
</style> -->
