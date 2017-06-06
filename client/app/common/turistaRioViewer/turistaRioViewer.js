import angular from 'angular';
import uiRouter from 'angular-ui-router';
import turistaRioViewerComponent from './turistaRioViewer.component';

let turistaRioViewerModule = angular.module('turistaRioViewer', [
  uiRouter
])

.component('turistaRioViewer', turistaRioViewerComponent)

.name;

export default turistaRioViewerModule;
