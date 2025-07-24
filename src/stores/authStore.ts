import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    password: "",
    otp: "",
  }),
  actions: {
    setEmail(email: string) {
      this.email = email;
    },
    setPassword(password: string) {
      this.password = password;
    },
    setOtp(otp: string) {
      this.otp = otp;
    },
    reset() {
      this.email = "";
      this.password = "";
      this.otp = "";
    },
  },
});
