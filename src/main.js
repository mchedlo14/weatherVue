

// import { createApp } from 'vue';
// import store from './store';
// import App from './App.vue';
// import AOS from 'aos'
// import 'aos/dist/aos.css'


// const app = createApp(App);
// app.use(store);
// app.mount('#app');

import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
app.use(store);

app.mount('#app');

AOS.init();