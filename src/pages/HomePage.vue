<script>
import WeclomeSection from "@/components/welcomeSection/WeclomeSection.vue";
import ComingSoonSection from "@/components/comingSoonSection/ComingSoonSection.vue";
import ScreeningsSection from "../components/screeningsSection/ScreeningsSection.vue";

export default {
  components: {
    WeclomeSection,
    ComingSoonSection,
    ScreeningsSection,
  },
};
</script>

<template>
  <div>
    <WeclomeSection />
    <ComingSoonSection />
    <ScreeningsSection />
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
