<script>
import HeaderPrimary from "../components/Header/HeaderPrimary.vue";
import WeclomeSection from "../components/WelcomeSection/WeclomeSection.vue";
import ComingSoonSection from "../components/ComingSoonSection/ComingSoonSection.vue";

export default {
  components: {
    HeaderPrimary,
    WeclomeSection,
    ComingSoonSection,
  },
};
</script>

<template>
  <div>
    <HeaderPrimary />
    <WeclomeSection />
    <ComingSoonSection />
    <div class="screenings">Screenings</div>
    <div class="contact">Contact</div>
  </div>
</template>

<style lang="scss" scoped>
.screenings {
  height: 200px;
  border: 1px solid violet;
}
.contact {
  height: 50px;
  border: 1px solid yellow;
}
</style>
