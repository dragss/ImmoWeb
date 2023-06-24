import Vue from 'vue';
import App from './App.vue';
import VueGoogleCharts from 'vue-google-charts';
import router from './router';
import store from './store';
import MeiliSearch from 'meilisearch';
import VueFormulate from '@braid/vue-formulate';

import '@/assets/index.css';
import '@/assets/form/index.scss';

import Insee from '@/components/customInput/Insee';
Vue.component('Insee', Insee);

Vue.use(VueFormulate, {
  library: {
    insee: {
      classification: 'graph',
      component: 'Insee',
    },
  },
});
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

Vue.prototype.$meilisearch = new MeiliSearch({
  host: 'https://meilisearch.api-terredimmo.fr',
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
