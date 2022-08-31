<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
import SectionTitleSecondary from "@/components/global/SectionTitleSecondary.vue";

export default defineComponent({
  name: "ContactUsSection",
  components: { SectionContainer, ContactDetails, SectionTitleSecondary },
});
</script>

<template>
  <section class="contact">
    <SectionContainer class="contact__container">
      <SectionTitleSecondary title="Contact us" class="contact__title" />
      <ContactDetails />
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.contact__container {
  padding-top: 144px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mediumScreen {
    padding-top: 148px;
    padding-bottom: 80px;
  }
}
</style>
