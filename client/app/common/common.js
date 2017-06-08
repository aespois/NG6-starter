import './common.scss'; //css comum a todas as views
import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import contactsViewerModule from './contacts-viewer/contacts-viewer';
import contactsEditorModule from './contacts-editor/contacts-editor';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  contactsViewerModule,
  contactsEditorModule
])

.name;

export default commonModule;
