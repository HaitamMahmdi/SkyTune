import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import "@fontsource/inter/400.css"; // regular
import ButtonCom from "@/components/ButtonCom.vue";
const pinia = createPinia();
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay);
createApp(App)
  .component("ButtonCom", ButtonCom)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
