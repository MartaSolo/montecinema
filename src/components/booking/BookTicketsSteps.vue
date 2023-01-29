<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BaseButton from "@/components/global/BaseButton.vue";

export default defineComponent({
  name: "BookTicketsSteps",
  components: { SectionContainer, BaseButton },
  props: {
    step: {
      type: Number,
    },
  },
});
</script>

<template>
  <nav class="booking__steps">
    <SectionContainer class="booking__steps-container">
      <BaseButton
        class="booking__step"
        :class="{ active: this.step === 1 }"
        size="tiny"
        colorTheme="light-empty"
        ><div class="booking__step-number">1</div>
        <div class="booking__step-text">Choose seats</div>
      </BaseButton>
      <BaseButton
        class="booking__step"
        :class="{ active: this.step === 2 }"
        size="tiny"
        colorTheme="light-empty"
      >
        <div class="booking__step-number">2</div>
        <div class="booking__step-text">Book tickets</div>
      </BaseButton>
    </SectionContainer>
  </nav>
</template>

<style lang="scss" scoped>
.booking__steps-container {
  background-color: $colorRedWispPink;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 40px;
  @include mediumScreen {
    height: 80px;
    gap: 20px;
  }
}
.booking__step {
  padding: 5px 8px;
  background-color: $colorRedWispPink;
  @include mediumScreen {
    height: 40px;
    width: 186px;
    padding: 12px 6px;
    font-size: 1rem;
    justify-content: flex-start;
  }
}
.booking__step-number {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $colorWhiteSnow;
  background-color: $colorRedBittersweet;
  @include mediumScreen {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
}

.booking__step.active {
  color: $colorGreyTuna;
  border: 2px solid $colorGreyTuna;
  &:hover {
    color: $colorGreyTuna;
    border: 2px solid $colorGreyTuna;
  }
  .booking__step-number {
    color: $colorWhiteSnow;
    background-color: $colorGreyTuna;
  }
}

.booking__step {
  cursor: auto;
  &:hover {
    border: 2px solid $colorRedSweetPink;
    color: $colorRedSweetPink;
  }
}
</style>
