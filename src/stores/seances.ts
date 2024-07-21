import { defineStore } from "pinia";
import { getAllSeances } from "@/api/services/Seances";
import { Seance } from "@/types";

interface State {
  seances: Seance[];
  seancesIsLoading: boolean;
  seancesError: any;
}

export const useSeancesStore = defineStore({
  id: "seances",
  state: (): State => ({
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
    async getSeances(date: string) {
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
