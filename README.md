# Coinbase Clone – Vue.js 

This project is a simplified clone of Coinbase's login flow, built using **Vue 3**, **Tailwind CSS v4**, **Pinia**, and **Font Awesome**. It covers multiple steps in the authentication process, including:

-  Email entry and validation
-  Password screen with toggle visibility
-  2FA (Two-Factor Authentication) step
-  Use of global state (via Pinia) to share user email/password
-  Clean, responsive design with Tailwind

## 2FA PASSWORD (1234576)

---

## Key Design / Technical Decisions

###  1. Multi-step Login Flow Using Vue Router
Instead of building a single page with conditional rendering, I split the login flow into **separate pages** (e.g., `/login`, `/password`, `/2fa`). This makes routing simpler and feels more real-world.

- `/login` – User inputs their email
- `/Login/password` – Password form for the provided email
- `/2fa` – Enter verification code

###  2. State Management with Pinia
I used **Pinia** to store the email and password between steps. This prevents prop-drilling and allows state sharing across pages without needing Vuex.

```ts
// Example: authStore.ts
export const useAuthStore = defineStore('auth', () => {
  const email = ref('')
  const password = ref('')
  ...
})

##  Tech Stack
- Vue 3 (Composition API + `<script setup>`)
- Vue Router
- Pinia
- Tailwind CSS
- FontAwesome


## 🚀 Features
- Responsive design
- Form validation & error handling
- Reusable components
- Dark mode and Light mode


## ⚔ Challenges & Fixes
- Mimicking Coinbase’s Icons
- Diffculties access the site : Took pictures and screenshot for reference 
- Mimicking Coinbase’s spacing and fonts
- Eye Icon Toggle for Password Not Working : Fix - I used a ref like show.value and updated the input’s :type dynamically based on that.
- Font Awesome Icons Not Rendering : I had forgotten to import and register the icons with FontAwesome’s library.add() method.




