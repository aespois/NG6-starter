class TestComponentController {
  constructor($http) {
    console.log('iniciando');
    this.name = 'testComponent';
    this.http= $http;
    $http.get('/api/test').then((response)=>this.name=response.data);
  }

  buscarDados(categoria){
    console.log(categoria);
    if(categoria) {
      this.http.get(`/api/${categoria}`)
        .then((response)=>this.info=response.data);
    }
  }
}

export default TestComponentController;
