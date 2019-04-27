import Vue from 'vue';
import Router from 'vue-router';
import TransactionsView from './views/TransactionsView.vue';
import TransactionImportView from './views/TransactionImportView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'transactions',
      component: TransactionsView,
    },
    {
      path: '/imports',
      name: 'imports',
      component: TransactionImportView,
    },
  ],
});
