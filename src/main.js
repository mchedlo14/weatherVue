

import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import dotenv from 'dotenv';
// dotenv.config();

const app = createApp(App);
app.use(store);
app.mount('#app');