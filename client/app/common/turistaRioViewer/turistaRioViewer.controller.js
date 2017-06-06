class TuristaRioViewerController {
  constructor($http) {
    this.name = 'turistaRioViewer';
    this.$http = $http;
  }
  $onInit() {
    this.opcoes = [
      {nome:'banheiros', value:'banheiros'},
      {nome:'bombeiros', value:'bombeiros'},
      {nome:'delegacias', value:'delegacias'},
      {nome:'escolas', value:'escolas'},
      {nome:'hoteis', value:'hoteis'},
      {nome:'jogos olimpicos', value:'jogos-olimpicos'},
      {nome:'pontos turisticos', value:'pontos-turisticos'},
      {nome:'postos de saude', value:'postos-saude'},
      {nome:'praias', value:'praias'},
      {nome:'restaurantes', value:'restaurantes'}
    ];
    //this.$http.get('/api/banheiros').then((response)=>this.dados=response.data);
  }

  onCategoriaChanged(categoria){
    this.buscar({$event:this.categoria});
  }

}

export default TuristaRioViewerController;
