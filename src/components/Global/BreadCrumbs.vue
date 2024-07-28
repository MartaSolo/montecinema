<script>
import { defineComponent } from "vue";
import SectionContainer from "@/components/global/SectionContainer.vue";
import BaseButton from "@/components/global/BaseButton.vue";
import ArrowLeft from "@/assets/images/arrow_left.svg";
import ChevronRight from "@/assets/images/chevron_right.svg";

export default defineComponent({
  name: "BreadCrumbs",
  components: { SectionContainer, ArrowLeft, BaseButton, ChevronRight },
  props: {
    currentPageName: {
      type: String,
    },
    parentPageName: {
      type: String,
    },
    parentRouteName: {
      type: Object,
    },
  },
  methods: {
    goBack() {
      return this.$router.go(-1) || this.$router.push({ name: "HomePage" });
    },
  },
});
</script>

<template>
  <nav class="breadcrumbs">
    <SectionContainer class="breadcrumbs__container">
      <div class="breadcrumbs__content">
        <BaseButton
          class="breadcrumbs__back"
          size="small"
          colorTheme="dark-empty"
          @click="goBack"
        >
          <div class="breadcrumbs__back--content">
            <ArrowLeft class="breadcrumbs__back--icon" />
            <div class="breadcrumbs__back--text">Back</div>
          </div>
        </BaseButton>
        <BaseButton
          v-if="parentPageName"
          class="breadcrumbs__parent"
          :to="parentRouteName"
          size="small"
          colorTheme="accent-text"
          >{{ parentPageName }}</BaseButton
        >
        <ChevronRight v-if="parentPageName" class="breadcrumbs__chevron" />
        <span class="breadcrumbs__current">{{ currentPageName }} </span>
      </div>
    </SectionContainer>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumbs__content {
  background-color: $colorRedWispPink;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  @include mediumScreen {
    padding: 15px 20px;
  }
}

.breadcrumbs__back,
.breadcrumbs__parent,
.breadcrumbs__current {
  background-color: $colorRedWispPink;
  @include mediumScreen {
    font-size: 1rem;
  }
}

.breadcrumbs__back {
  padding: 0;
  border: 2px solid $colorRedWispPink;
  @include mediumScreen {
    padding: 12px 32px;
    border: 2px solid $colorGreyTuna;
    &:hover {
      border: 2px solid $colorGreyBombay;
    }
  }

  &--content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &--text {
    display: none;
    @include mediumScreen {
      display: flex;
      font-family: $fontSecondary;
      font-weight: 500;
      line-height: 1.1rem;
      font-size: 1rem;
    }
  }
}

.breadcrumbs__chevron {
  flex-shrink: 0;
}

.breadcrumbs__current {
  font-family: $fontSecondary;
  font-weight: 500;
  line-height: 1.1rem;
  font-size: 0.9rem;
  padding-left: 14px;
  @include mediumScreen {
    font-size: 1rem;
    padding-left: 24px;
  }
}

.breadcrumbs__parent {
  border: 2px solid $colorRedWispPink;
  padding: 9px 14px;
  @include mediumScreen {
    padding: 9px 24px;
    &:hover {
      border: 2px solid $colorRedCosmos;
    }
  }
}
</style>
