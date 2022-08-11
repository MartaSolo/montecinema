<script>
import { defineComponent } from "vue";
import MenuIconOpen from "../assets/images/navigation-menu.svg";
import MenuIconClose from "../assets/images/close.svg";

export default defineComponent({
  props: {
    icon: String,
  },
  computed: {
    open() {
      return this.icon === "open" ? true : false;
    },
    close() {
      return this.icon === "close" ? true : false;
    },
  },
  components: {
    MenuIconOpen,
    MenuIconClose,
  },
});
</script>

<template>
  <button v-if="open" class="button__icon"><MenuIconOpen /></button>
  <button v-if="close" class="button__icon"><MenuIconClose /></button>
</template>

<style lang="scss" scoped>
.button__icon {
  border: 1px solid black;
  width: 50px;
  height: 50px;
}
</style>
