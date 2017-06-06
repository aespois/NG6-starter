import './common.scss'; //css comum a todas as views
import angular from 'angular';
import turistaRioViewerModule from './turistaRioViewer/turistaRioViewer';

let commonModule = angular.module('app.common', [
  turistaRioViewerModule
])

.name;

export default commonModule;
