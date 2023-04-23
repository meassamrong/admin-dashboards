import { createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'gitart-vue-dialog/dist/style.css'
 
import "vue-select/dist/vue-select.css"
import Notifications from '@kyvg/vue3-notification'
const app = createApp(App)
 
app.use(router)
app.use(Notifications)
app.mount('#app')

