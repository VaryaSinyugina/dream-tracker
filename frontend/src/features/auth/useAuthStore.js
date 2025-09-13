import { create } from "zustand";
import { persist } from "zustand/middleware";

import { loginRequest, registerRequest } from "./authApi";

export const useAuthStore = create(
  persist((set) => ({
    token: null,
    loading: false,
    errorLog: null,
    errorReg: null,

    login: async (email, password) => {
      set({ loading: true, errorLog: null });
      try {
        const res = await loginRequest(email, password);
        set({ token: res.data.token, loading: false });
      } catch (err) {
        set({
          errorLog: err.response?.data?.error || err.message,
          loading: false,
        });
      };
    },

    register: async (name, email, password) => {
      set({ loading: true, errorReg: null });
      try {
        const res = await registerRequest(name, email, password);
        set({ loading: false });
      } catch (err) {
        set({
          errorReg: err.response?.data?.error || err.message,
          loading: false,
        });
      };
    },
  })),
  {
    name: "auth-storage",
    partialize: (state) => ({ token: state.token }),
  }
);
