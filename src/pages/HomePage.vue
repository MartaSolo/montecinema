<script>
import HeaderPrimary from "../components/Header/HeaderPrimary.vue";

export default {
  components: {
    HeaderPrimary,
  },
};
</script>

<template>
  <HeaderPrimary />
  <div class="hero">Hero</div>
  <div class="soon">Coming soon</div>
  <div class="screenings">Screenings</div>
  <div class="contact">Contact</div>
</template>

<style lang="scss" scoped>
.hero {
  height: 100px;
  border: 1px solid red;
}
.soon {
  height: 100px;
  border: 1px solid $colorRedBittersweet;
}
.screenings {
  height: 200px;
  border: 1px solid violet;
}
.contact {
  height: 50px;
  border: 1px solid yellow;
}
</style>
