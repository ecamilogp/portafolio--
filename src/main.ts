import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { Quasar } from 'quasar';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const myApp = createApp(App);

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});

myApp.mount('#app');
