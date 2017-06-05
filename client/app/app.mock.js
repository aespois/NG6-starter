import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from './app';
import testMock from './mock/test';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.run(testMock)

.name;

export default appMockModule;
