import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import specific icons
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { faWallet, faKey } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faGoogle, faApple, faWallet, faKey, faEye, faEyeSlash, faUser);

const app = createApp(App);
app.use(createPinia());
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
