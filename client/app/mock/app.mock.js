import angular from 'angular';
import angularMocks from 'angular-mocks';
import appModule from '../app';
import testMock from './test/test';
import contactsMock from './contacts/contacts';

let appMockModule = angular.module('appMock', [
  appModule,
  'ngMockE2E'
])

.run(testMock)
.run(contactsMock)

.name;

export default appMockModule;
