import Vue from 'vue';
import Router from 'vue-router';
import ListImages from '../components/ListImages';

Vue.use(Router);
const router =
  [
    { path: '/', name: 'List Image', component: ListImages },

  ];
export default new Router({
  routes: router,
});