// Load bulma styles in the main entry point before all else
import "bulma/css/bulma.min.css";

import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";

// Create new vue app
createApp(App).use(router).mount("#app");
