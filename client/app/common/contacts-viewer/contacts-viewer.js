import angular from 'angular';
import contactsViewerComponent from './contacts-viewer.component';

let contactsViewerModule = angular.module('contactsViewer', [

])

.component('contactsViewer', contactsViewerComponent)

.name;

export default contactsViewerModule;
