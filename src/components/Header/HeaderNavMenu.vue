<script>
import { defineComponent } from "vue";
import ButtonIcon from "../ButtonIcon.vue";

export default defineComponent({
  data() {
    return {
      // userLogged: true,
      userLogged: false,
    };
  },
  components: {
    ButtonIcon,
  },
});
</script>

<template>
  <ButtonIcon icon="open" />
  <ButtonIcon icon="close" />
  <ul class="nav__list">
    <li class="nav__list-item">
      <a class="nav__list-link" href="#">Movies</a>
    </li>
    <li class="nav__list-item">
      <a class="nav__list-link" href="#">Screenings</a>
    </li>
    <li class="nav__list-item">
      <a class="nav__list-link" href="#">Contact us</a>
    </li>
    <li v-if="userLogged" class="nav__list-item">
      <a class="nav__list-link" href="#">My Account</a>
    </li>
    <li v-if="!userLogged" class="nav__list-item">
      <a class="nav__list-link" href="#">Register</a>
    </li>
    <li v-if="!userLogged" class="nav__list-item">
      <a class="nav__list-link" href="#">Login</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav__list {
  background-color: orange;
}
</style>
