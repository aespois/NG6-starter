import template from './contacts.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './contacts.controller';
import './contacts.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let contactsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default contactsComponent;
