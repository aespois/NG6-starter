import contacts from './contacts-data';

function ContactsMock($httpBackend, $log) {

  $httpBackend.whenGET('/api/contacts').respond( (method, url, data, headers) => {
    $log.debug('Dados recebidos:', method, url, data, headers);
    return [200, contacts, {}];
  });

  $httpBackend.whenPOST('/api/contacts').respond( (method, url, data, headers) => {
    $log.debug('Dados recebidos:', method, url, data, headers);
    return [200, 'Testando o HTTTP/GET.', {}];
  });

}

ContactsMock.$inject = ['$httpBackend','$log'];

export default ContactsMock;
