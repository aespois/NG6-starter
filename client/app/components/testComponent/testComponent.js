import angular from 'angular';
import uiRouter from 'angular-ui-router';
import testComponentComponent from './testComponent.component';

let testComponentModule = angular.module('testComponent', [
  uiRouter
])

.component('testComponent', testComponentComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('testState', {
      url: '/',
      component: 'testComponent'
    });
})

.name;

export default testComponentModule;
