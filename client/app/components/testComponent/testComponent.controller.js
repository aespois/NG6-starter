class TestComponentController {
  constructor($http) {
    console.log('iniciando');
    this.name = 'testComponent';
    $http.get('/api/test').then((response)=>this.name=response.data);
    
  }
}

export default TestComponentController;
