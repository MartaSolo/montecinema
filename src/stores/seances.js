import { defineStore } from "pinia";
import { getAllSeances } from "@/api/services/Seances";

export const useSeancesStore = defineStore({
  id: "seances",
  state: () => ({
    seances: [],
    seancesIsLoading: false,
    seancesError: null,
  }),
  getters: {
    getSeancesErrorMessage(state) {
      return (
        state.seancesError?.message ||
        "We are sorry, but seances cannot be displayed."
      );
    },
  },
  actions: {
    async getSeances(date) {
      this.seances = [];
      this.seancesIsLoading = true;
      try {
        const respData = await getAllSeances(date);
        this.seances = respData.data;
      } catch (error) {
        this.seancesError = error;
      } finally {
        this.seancesIsLoading = false;
      }
    },
  },
});
