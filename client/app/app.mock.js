import angular from 'angular';
import appModule from 'app.js';
import testMock from 'mock/test';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.run(testMock)

.name;

export default appMockModule;
