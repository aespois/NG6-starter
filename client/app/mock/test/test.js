function TestMock($httpBackend, $log) {

  $httpBackend.whenGET('/api/test').respond( (method, url, data, headers) => {
    $log.debug('Dados recebidos:', method, url, data, headers);
    return [200, 'Testando o HTTTP/GET.', {}];
  });

}

TestMock.$inject = ['$httpBackend','$log'];

export default TestMock;
