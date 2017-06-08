import template from './contacts-editor.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './contacts-editor.controller';
//import './contacts-editor.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let contactsEditorComponent = {
  bindings: {
    _contato: '< contato',
    editing: '<',
    erro: '@',
    novoContato: '&',
    modificarContato: '&',
    deletarContato: '&',
    resetarContatos: '&'
  },
  template,
  controller
};

export default contactsEditorComponent;
