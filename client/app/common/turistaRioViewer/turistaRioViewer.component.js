import template from './turistaRioViewer.html';
import controller from './turistaRioViewer.controller';
import './turistaRioViewer.scss';

let turistaRioViewerComponent = {
  bindings: {
    dados: '<',
    buscar: '&'
  },
  template,
  controller
};

export default turistaRioViewerComponent;
