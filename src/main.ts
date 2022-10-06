import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import i18n from "@/i18n";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";

import "./assets/stylesheets/main.scss";

const app = createApp(App);
const pinia = createPinia();

const metaManager = createMetaManager();

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(metaManager);
app.use(metaPlugin);

app.mount("#app");
