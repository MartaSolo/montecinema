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
      return this.$router.go(-1);
    },
  },
});
</script>

<template>
  <nav class="breadcrumbs">
    <SectionContainer class="breadcrumbs__container">
      <BaseButton
        class="breadcrumbs__back"
        size="small"
        colorTheme="dark-empty"
        @click="goBack"
      >
        <div class="breadcrumbs__back-content">
          <ArrowLeft class="breadcrumbs__back-icon" />
          <div class="breadcrumbs__back-text">Back</div>
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
      <ChevronRight v-if="parentPageName" />
      <BaseButton
        class="breadcrumbs__current"
        :to="this.$route"
        size="small"
        colorTheme="dark-empty"
        >{{ currentPageName }}
      </BaseButton>
    </SectionContainer>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumbs__container {
  background-color: $colorRedWispPink;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;
  @include mediumScreen {
    height: 80px;
  }
}
.breadcrumbs__back,
.breadcrumbs__parent,
.breadcrumbs__current {
  background-color: $colorRedWispPink;
  @include mediumScreen {
    height: 40px;
    padding: 12px 32px;
    font-size: 1rem;
  }
}
.breadcrumbs__parent,
.breadcrumbs__current {
  @include mediumScreen {
    padding: 12px 16px;
  }
}

.breadcrumbs__back {
  border: 2px solid $colorRedWispPink;
  @include mediumScreen {
    border: 2px solid $colorGreyTuna;
    &:hover {
      border: 2px solid $colorGreyBombay;
    }
  }
}

.breadcrumbs__back-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.breadcrumbs__back-text {
  display: none;
  @include mediumScreen {
    display: flex;
    font-family: $fontSecondary;
    font-weight: 500;
    line-height: 1.1rem;
    font-size: 1rem;
  }
}
.breadcrumbs__current {
  display: flex;
  border: 2px solid $colorRedWispPink;
  @include mediumScreen {
    &:hover {
      border: 2px solid $colorRedCosmos;
    }
  }
}
.breadcrumbs__parent {
  border: 2px solid $colorRedWispPink;
  @include mediumScreen {
    &:hover {
      border: 2px solid $colorRedCosmos;
    }
  }
}
</style>
