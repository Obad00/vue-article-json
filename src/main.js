import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router'; // Importation du routeur

const app = createApp(App);

app.use(router); // Utilisation du routeur
app.mount('#app'); // Montage de l'application
