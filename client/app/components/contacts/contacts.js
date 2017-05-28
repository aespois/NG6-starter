import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactsComponent from './contacts.component';
import contactsService from './contacts.service';

let contactsModule = angular.module('contacts', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('contacts', {
      url: '/contacts',
      component: 'contacts'
    });
})

.service('ContactsService', contactsService)

.component('contacts', contactsComponent)

.name;

export default contactsModule;
