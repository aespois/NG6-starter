import template from './contacts-viewer.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './contacts-viewer.controller';
//import './contacts-viewer.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let contactsViewerComponent = {
  bindings: {
    contatos: '<',
    onContatoClicked: '&'
  },
  template,
  controller
};

export default contactsViewerComponent;
