import { createApp } from 'vue'
import router from "./router";
import "./assets/style/tailwind.css";
import "./assets/style/global.css";
import App from './App.vue'
import { RegisterGlobalComponents } from './utils/import';
const app = createApp(App)
app.use(router)
RegisterGlobalComponents(app);
app.mount('#app')