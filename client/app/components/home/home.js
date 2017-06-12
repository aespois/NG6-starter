import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {component: 'home'},
        footer: {template: '<app-footer> Rodapé customizado para o home esta aplicação </app-footer>'}
      }
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
