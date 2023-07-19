/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import VueApexCharts from "vue3-apexcharts";
import 'apexcharts/dist/apexcharts.css';

const app = createApp(App)

registerPlugins(app)

app.use(VueApexCharts);
// Vue拡張機能
app.config.devtools = true;
app.mount('#app')
