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
});
</script>

<template>
  <header class="header">
    <SectionContainer class="header__container">
      <div class="header__mobile"><HeaderNavMobile /></div>
      <div class="header__desktop"><HeaderNavDesktop /></div>
    </SectionContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 122px;
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
.header__mobile {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mediumScreen {
    display: none;
  }
}
.header__desktop {
  display: none;
  @include mediumScreen {
    height: 100%;
    width: 100%;
    display: block;
  }
}
</style>
