import template from './about.html'; // !text é um artifício do systemjs no plunker para carregar html
import controller from './about.controller';
import './about.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default aboutComponent;
