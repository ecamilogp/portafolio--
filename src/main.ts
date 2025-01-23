import { createApp } from 'vue';
import './style.css';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import router from './router';

const myApp = createApp(App);

import App from './App.vue';

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});
myApp.mount('#app');
