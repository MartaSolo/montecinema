<script>
import { defineComponent } from "vue";
import MenuIconOpen from "@/assets/images/navigation-menu.svg";
import MenuIconClose from "@/assets/images/close.svg";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
  },
  computed: {
    open() {
      return this.icon === "openMenu" ? true : false;
    },
    close() {
      return this.icon === "closeMenu" ? true : false;
    },
    classes() {
      return [`button__icon ${this.class}`];
    },
  },
  components: {
    MenuIconOpen,
    MenuIconClose,
  },
});
</script>

<template>
  <button
    v-if="open"
    type="button"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <MenuIconOpen />
  </button>
  <button
    v-if="close"
    type="button"
    :class="classes"
    @click="$emit('click', $event)"
  >
    <MenuIconClose />
  </button>
</template>

<style lang="scss" scoped>
.button__icon {
  border: 1px solid $colorWhiteSnow;
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
</style>
