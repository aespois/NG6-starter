import template from './home.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './home.controller';
import './home.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default homeComponent;
