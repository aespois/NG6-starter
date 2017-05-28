import template from './app.html';// !text é um artifício do systemjs no plunker para carregar arquivos html
import './app.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let appComponent = {
  template,
  restrict: 'E'
};

export default appComponent;
