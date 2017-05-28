import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

let appModule = angular.module('app', [
    ngAnimate,
    ngAria,
    uiBootstrap,
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://docs.angularjs.org/**',
      'https://docs.angularjs.org/**',
      'http://storage.googleapis.com/**',
      'https://storage.googleapis.com/**'
    ]);
  }])

  .component('app', AppComponent)

  .name;

angular.bootstrap(document.body, [appModule]);
// export default appModule;
