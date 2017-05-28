import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule
])
  
.name;

export default commonModule;
