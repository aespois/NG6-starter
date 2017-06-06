import angular from 'angular';
import testComponent from './testComponent/testComponent';

let componentModule = angular.module('app.components', [
  testComponent
])

.name;

export default componentModule;
