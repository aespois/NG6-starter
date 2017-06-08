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
    })
    .state('contacts.edit', {
      url: '/edit',
      template: `
        <contacts-editor
          contato="$ctrl.contato"
          editing="$ctrl.editing"
          erro="{{$ctrl.erro}}"
          novo-contato="$ctrl.novoContato($event)"
          modificar-contato="$ctrl.modificarContato($event)"
          deletar-contato="$ctrl.deletarContato($event)"
          resetar-contatos="$ctrl.resetarContatos($event)">
        </contacts-editor>
      `
    });
})

.service('ContactsService', contactsService)

.component('contacts', contactsComponent)

.name;

export default contactsModule;
