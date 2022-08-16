<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import HeaderNavMobile from "@/components/header/HeaderNavMobile.vue";
import HeaderNavDesktop from "@/components/header/HeaderNavDesktop.vue";

export default defineComponent({
  name: "HeaderPrimary",
  components: {
    SectionContainer,
    HeaderNavMobile,
    HeaderNavDesktop,
  },
  data() {
    return {
      mobileView: true,
    };
  },
  mounted() {
    addEventListener("resize", this.onResize);
  },
  unmounted() {
    removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.mobileView = window.innerWidth <= 1024;
    },
  },
});
</script>

<template>
  <header class="header">
    <SectionContainer class="header__container">
      <HeaderNavMobile v-if="mobileView" />
      <HeaderNavDesktop v-if="!mobileView" />
    </SectionContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include largeScreen {
    height: 112px;
  }
}
.header__container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
