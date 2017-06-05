class HomeController {
  constructor($http) {
    this.name = 'home';
    this.testData = 'Aguarde buscando dados';
    $http.get('/api/test')
      .then( (response) => this.testData = response.data );
  }
}

HomeController.$inject = ['$http'];

export default HomeController;
