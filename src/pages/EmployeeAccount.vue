<script>
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "EmployeeAccount",
  methods: {
    ...mapActions(useAuthStore, ["restoreUserData"]),
  },
  created() {
    this.restoreUserData();
  },
});
</script>

<template>
  <div>
    <h1>Employee account page</h1>
  </div>
</template>

<style lang="scss" scoped></style>
