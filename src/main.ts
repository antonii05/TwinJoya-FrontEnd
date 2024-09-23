import '@/assets/style.css'; //estilos predefinidos

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

/* FontAwesomeIcons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Axios */
import axios from 'axios';

// Librerias para meter los Iconos e FontAwasome
library.add(fas, fab, far);

/* Axios */
/* import axios from 'axios'
import VueAxios from 'vue-axios' */

//importacion del Editor de Texto
import CKEditor from '@ckeditor/ckeditor5-vue'; //lo podemos quitar se utilizara otro

// Importa los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa los scripts de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
//Usa la libreria del Editor de Texto
app.use(CKEditor);

app.component('FontAwesomeIcon', FontAwesomeIcon);

// Configura la URL base para Axios
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

//axios
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'

app.mount('#app');
