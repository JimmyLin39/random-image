import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

import 'semantic-ui-less/semantic.less';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
