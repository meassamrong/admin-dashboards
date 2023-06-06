import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import DataTableComponent from './components/ProductsList.vue';
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import eventBus from './eventBus.js';
import "vue-select/dist/vue-select.css"
import Notifications from '@kyvg/vue3-notification'
import velocity from 'velocity-animate'
const app = createApp(App)
 
app.use(router)
app.use(Notifications, {velocity})
app.mount('#app')
app.use(eventBus);
app.component('data-table-component', DataTableComponent)
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
app.component('GDialog', GDialog)