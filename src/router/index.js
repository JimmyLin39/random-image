import Vue from 'vue';
import Router from 'vue-router';
import ListImages from '../components/ListImages';
import SavedImages from '../components/SavedImages';

Vue.use(Router);
const router =
  [
    { path: '/', name: 'List Image', component: ListImages },
    { path: '/saved', name: 'Saved Image', component: SavedImages },

  ];
export default new Router({
  routes: router,
});