<script>
import HeaderPrimary from "../components/Header/HeaderPrimary.vue";
import WeclomeSection from "../components/WelcomeSection/WeclomeSection.vue";

export default {
  components: {
    HeaderPrimary,
    WeclomeSection,
  },
};
</script>

<template>
  <div>
    <HeaderPrimary />
    <WeclomeSection />
    <div class="soon">Coming soon</div>
    <div class="screenings">Screenings</div>
    <div class="contact">Contact</div>
  </div>
</template>

<style lang="scss" scoped>
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
