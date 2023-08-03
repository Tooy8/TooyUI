import { createApp } from 'vue'
import App from './App.vue'

// import YUI from '../packages/index'


// import YUI from '../node_modules/tooy-ui'
import '../node_modules/tooy-ui/dist/style.css'
import YUI from 'tooy-ui'


const app = createApp(App)
app.use(YUI)
app.mount('#app')
