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
  // border: 1px solid violet;
}
.input__select-label {
  display: inline-block;
  text-transform: uppercase;
  font-family: $fontSecondary;
  font-size: 0.9rem;
  font-weight: 700;
  color: $colorRedBittersweet;
  margin: 40px 0 12px 0;
  @include mediumScreen {
    margin: 0 0 12px 0;
  }
}
</style>
