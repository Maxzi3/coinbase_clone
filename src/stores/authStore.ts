import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    password: "",
    code: "",
  }),
  actions: {
    setEmail(value: string) {
      this.email = value;
    },
    setPassword(value: string) {
      this.password = value;
    },
    setCode(value: string) {
      this.code = value;
    },
    reset() {
      this.email = "";
      this.password = "";
      this.code = "";
    },
  },
});
