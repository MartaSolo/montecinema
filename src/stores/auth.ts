import { defineStore } from "pinia";
import * as authApi from "@/api/services/Authentication.js";
import { removeAuthHeader, setAuthHeader } from "@/api/axiosConfig.js";
import { User, UserData, AuthToken, Credentials } from "@/types";

const TOKEN_STORAGE_KEY = "auth-token";
const USER_STORAGE_KEY = "user";

interface Store {
  user: User | null;
  userIsLoading: boolean;
  userError: any;
  authToken: AuthToken | null;
  updateUserStatus: number | null;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): Store => ({
    user: null,
    userIsLoading: false,
    userError: null,
    authToken: null,
    updateUserStatus: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.authToken,
    isUserLoggedIn: (state) => {
      return state.authToken && state.user?.role === "user";
    },
    isEmployeeLoggedIn: (state) => {
      return state.authToken && state.user?.role === "employee";
    },
    userErrorMessage(state) {
      if (state.userError) {
        return (
          state.userError?.message ||
          "We are sorry, but the personal details cannot be displayed."
        );
      } else {
        return null;
      }
    },
  },
  actions: {
    setUserData({ authToken, user }: UserData) {
      this.authToken = authToken;
      this.user = user;
      localStorage.setItem(TOKEN_STORAGE_KEY, authToken);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    },
    resetUserData() {
      this.authToken = null;
      this.user = null;
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
    },
    restoreUserData() {
      if (this.authToken && this.user) return;
      console.log("Restoring user data fired");
      try {
        const authToken: AuthToken | null =
          localStorage.getItem(TOKEN_STORAGE_KEY);
        const userStoredObject = localStorage.getItem(USER_STORAGE_KEY);
        const user: User | null = userStoredObject
          ? JSON.parse(userStoredObject)
          : null;
        if (authToken && user) {
          setAuthHeader(`Bearer ${authToken}`);
          this.setUserData({ authToken, user });
        }
      } catch (error) {
        console.error(error);
        this.resetUserData();
      }
    },
    async login(credentials: Partial<Credentials>) {
      if (this.isLoggedIn) await this.logout();
      try {
        this.userIsLoading = true;
        const response = await authApi.login(credentials);
        const authHeader = response.headers.authorization;
        const authToken = authHeader.slice("Bearer ".length);
        setAuthHeader(authHeader);
        this.setUserData({ authToken, user: response.data });
      } catch (error) {
        this.userError = error;
      } finally {
        this.userIsLoading = false;
      }
    },
    async register(credentials: Partial<Credentials>) {
      console.log("store register fired", credentials);

      if (this.isLoggedIn) await this.logout();
      try {
        const response = await authApi.register(credentials);
        const authHeader = response.headers.authorization;
        const authToken = authHeader.slice("Bearer ".length);
        setAuthHeader(authHeader);
        this.setUserData({ authToken, user: response.data });
      } catch (error) {
        throw error;
      }
    },
    async logout() {
      if (!this.isLoggedIn) return;
      try {
        await authApi.logout();
        this.resetUserData();
        removeAuthHeader();
      } catch (error) {
        throw error;
      }
    },
    async getUser() {
      this.userIsLoading = true;
      this.userError = null;
      try {
        console.log("getUser fired");
        const response = await authApi.getUser();
        console.log("response.data", response.data);
        const updatedUser = { ...this.user, ...response.data };
        console.log("updatedUser", updatedUser);
        this.user = updatedUser;
        console.log("this.user", this.user);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
        // this.setUserData({ authToken: this.authToken, user: updatedUser });
      } catch (error) {
        this.userError = error;
      } finally {
        this.userIsLoading = false;
      }
    },
    async updateUserData(updatedUserData: Credentials) {
      console.log(updatedUserData);
      try {
        const response = await authApi.updateUser(updatedUserData);
        this.updateUserStatus = response.status;
        await this.getUser();
      } catch (error) {
        console.log(error);
      }
    },
    clearUpdateStatus() {
      this.updateUserStatus = null;
    },
  },
});
