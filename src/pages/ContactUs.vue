<script>
import { defineComponent } from "vue";
import BreadCrumbs from "@/components/global/BreadCrumbs.vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import SectionTitlePrimary from "@/components/global/SectionTitlePrimary.vue";
import LocationMap from "@/components/contact/LocationMap.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
import ContactSocialMedia from "@/components/contact/ContactSocialMedia.vue";

export default defineComponent({
  name: "ContactUs",
  components: {
    BreadCrumbs,
    SectionContainer,
    SectionTitlePrimary,
    LocationMap,
    ContactDetails,
    ContactSocialMedia,
  },
  metaInfo() {
    return {
      title: "Montecinema | Contact us",
    };
  },
});
</script>

<template>
  <section class="contact__page">
    <BreadCrumbs currentPageName="Contact us" />
    <SectionContainer class="contact__page-container">
      <SectionTitlePrimary title="Contact us" class="contact__page-title" />
      <div class="contact__page-content">
        <div class="contact__page-map">
          <LocationMap />
        </div>
        <div class="contact__page-details">
          <ContactDetails />
        </div>
        <div class="contact__page-social">
          <ContactSocialMedia />
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" scoped>
.contact__page-title {
  text-align: left;
  margin: 40px 0px 24px 0px;
  @include mediumScreen {
    margin: 64px 0px;
  }
}

.contact__page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 104px;
  @include mediumScreen {
    flex-direction: row;
  }
}

.contact__page-map {
  width: 327px;
  height: 284px;
  @include mediumScreen {
    width: 424px;
    height: 412px;
  }
  @include largeScreen {
    width: 632px;
  }
}
.contact__page-details .contact__details {
  border-radius: 0;
  margin-bottom: 2px;
  @include mediumScreen {
    width: 424px;
    height: 412px;
  }
  @include largeScreen {
    width: 632px;
  }
}

.contact__page-social {
  background-color: $colorGreyAthens;
  width: 327px;
  height: 80px;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @include mediumScreen {
    width: 80px;
    height: 412px;
    flex-direction: column;
    border-radius: 0;
  }
}
</style>
