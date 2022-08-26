<script>
import { defineComponent } from "vue";
import VueMultiselect from "vue-multiselect";

export default defineComponent({
  name: "BaseSelect",
  components: { VueMultiselect },
  props: {
    modelValue: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    passSelectedValue(modelData) {
      this.selected = modelData;
      this.$emit("update:modelValue", this.selected);
    },
  },
});
</script>

<template>
  <div class="input__select">
    <label class="input__select-label">{{ label }}</label>
    <VueMultiselect
      :value="selected"
      @update:modelValue="passSelectedValue"
      :options="options"
      :placeholder="placeholder"
      :close-on-select="true"
    >
    </VueMultiselect>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style lang="scss" scoped>
.input__select {
  width: 325px;
  @include mediumScreen {
    height: 86px;
  }
  @include largeScreen {
    width: 421px;
  }
}
.input__select-label {
  display: inline-block;
  text-transform: uppercase;
  font-family: $fontSecondary;
  font-size: 0.9rem;
  font-weight: 700;
  color: $colorRedBittersweet;
  margin-bottom: 12px;
  @include mediumScreen {
    margin: 0 0 20px 0;
  }
}
</style>
