<script>
import { defineComponent } from "vue";
import SectionTitleSecondary from "../global/SectionTitleSecondary.vue";
import SectionContainer from "../global/SectionContainer.vue";

export default defineComponent({
  name: "ScreeningsSection",
  components: { SectionTitleSecondary, SectionContainer },
});
</script>

<template>
  <SectionContainer>
    <SectionTitleSecondary
      title="Screenings:"
      subtitle="Friday 19/08/2022"
    ></SectionTitleSecondary>
  </SectionContainer>
</template>

<style lang="scss" scoped></style>
