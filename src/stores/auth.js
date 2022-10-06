import { defineStore } from "pinia";
import * as authApi from "@/api/services/Authentication.js";
import { removeAuthHeader, setAuthHeader } from "@/api/axiosConfig.js";

const TOKEN_STORAGE_KEY = "auth-token";
const USER_STORAGE_KEY = "user";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    userData: null,
    authToken: null,
    currentUser: null,
    currentUserIsLoading: true,
    currentUserError: null,
    updateUserStatus: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.authToken,
    isUserLoggedIn: (state) => {
      return state.authToken && state.userData?.role === "user";
    },
    isEmployeeLoggedIn: (state) => {
      return state.authToken && state.userData?.role === "employee";
    },
    currentUserErrorMessage(state) {
      return (
        state.currentUserError?.message ||
        "We are sorry, but the personal details cannot be displayed."
      );
    },
  },
  actions: {
    setUserData({ authToken, user }) {
      this.authToken = authToken;
      this.userData = user;
      localStorage.setItem(TOKEN_STORAGE_KEY, authToken);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    },
    resetUserData() {
      this.authToken = null;
      this.userData = null;
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    restoreUserData() {
      try {
        const authToken = localStorage.getItem(TOKEN_STORAGE_KEY);
        const user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || null);
        if (authToken && user) {
          setAuthHeader(`Bearer ${authToken}`);
          this.setUserData({ authToken, user });
        }
      } catch (error) {
        console.error(error);
        this.resetUserData();
      }
    },
    async login(credentials) {
      if (this.isLoggedIn) await this.logout();
      const response = await authApi.login(credentials);
      const authHeader = response.headers.authorization;
      const authToken = authHeader.slice("Bearer ".length);
      setAuthHeader(authHeader);
      this.setUserData({ authToken, user: response.data });
    },
    async register(credentials) {
      if (this.isLoggedIn) await this.logout();
      const response = await authApi.register(credentials);
      const authHeader = response.headers.authorization;
      const authToken = authHeader.slice("Bearer ".length);
      setAuthHeader(authHeader);
      this.setUserData({ authToken, user: response.data });
    },
    async logout() {
      if (!this.isLoggedIn) return;
      await authApi.logout();
      this.resetUserData();
      removeAuthHeader();
    },
    async getCurrentUser() {
      this.currentUser = null;
      this.currentUserIsLoading = true;
      this.currentUserError = null;
      try {
        const response = await authApi.getUser();
        this.currentUser = response.data;
      } catch (error) {
        this.currentUserError = error;
      } finally {
        this.currentUserIsLoading = false;
      }
    },
    async updateUserData(credentials) {
      try {
        const response = await authApi.updateUser(credentials);
        this.updateUserStatus = response.status;
      } catch (error) {
        console.log(error);
      }
    },
    clearUpdateStatus() {
      this.updateUserStatus = null;
    },
  },
});
