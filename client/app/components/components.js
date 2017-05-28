import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './about/about';
import contactsModule from './contacts/contacts';

let componentModule = angular.module('app.components', [
  homeModule,
  aboutModule,
  contactsModule
])
  
.name;

export default componentModule;
