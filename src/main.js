import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router";

import VueAxios from 'vue-axios'
import axios from "./axios";
createApp(App);

require("./mock.js")
const app = createApp(App)

// eslint-disable-next-line no-undef
app.use(ElementPlus).use(VueAxios, axios).use(router).mount('#app')

app.config.globalProperties.$axios = axios;

