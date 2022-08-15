<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/Global/SectionContainer.vue";
import HeaderNavMobile from "@/components/Header/HeaderNavMobile.vue";
import HeaderNavDesktop from "@/components/Header/HeaderNavDesktop.vue";

export default defineComponent({
  name: "HeaderPrimary",
  data() {
    return {
      mobileView: true,
    };
  },
  methods: {
    onResize() {
      this.mobileView = window.innerWidth <= 1024;
    },
  },
  mounted() {
    addEventListener("resize", this.onResize);
  },
  unmounted() {
    removeEventListener("resize", this.onResize);
  },
  components: {
    SectionContainer,
    HeaderNavMobile,
    HeaderNavDesktop,
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
