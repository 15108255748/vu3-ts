import 'amfe-flexible';
import './assets/less/index.less';

import { createApp } from 'vue'
import route from './router'
import store from './store'
import App from './App'

import './index.css'

createApp(App).use(route).use(store).mount('#app')
