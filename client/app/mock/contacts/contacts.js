import angular from 'angular';
import _contacts from './contacts-data';

function ContactsMock($httpBackend, $log, storage) {
  let contacts = storage.load('contacts', _contacts);
  let _id = storage.load('contacts-index', _contacts.length+1);
  
  $httpBackend.whenGET('/api/contacts').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    return [200, contacts, {}];
  });

  $httpBackend.whenPOST('/api/contacts').respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    _data.id = _id++;
    contacts.push(_data);
    storage.save('contacts', contacts);
    storage.save('contacts-index', _id);
    return [200, contacts, {}];
  });

  $httpBackend.whenDELETE(/^\/api\/contacts.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    if (url === '/api/contacts') {// reseta toda a coleção
      contacts = angular.copy(_contacts);
      _id = _contacts.length+1;
      storage.load('contacts-index', _id);
    } else { //deleta um item da coleção
      let id = url.substring(14);
      for(let i=0; i<contacts.length; i++) {
        if(contacts[i].id == id){
          contacts.splice(i, 1);
          break;
        }
      }
    }
    storage.save('contacts', contacts);
    return [200, contacts, {}];
  });

  $httpBackend.whenPUT(/^\/api\/contacts.*$/).respond( (method, url, data, headers) => {
    $log.log('Dados recebidos:', method, url, data, headers);
    let _data = JSON.parse(data);
    if (url === '/api/contacts') {// atualiza toda a coleção
      contacts = _data;
    } else { //atualiza um item da coleção
      let id = url.substring(14);
      for(let i=0; i<contacts.length; i++) {
        if(contacts[i].id == id){
          contacts[i].name = _data.name;
          contacts[i].phone = _data.phone;
          break;
        }
      }
    }
    storage.save('contacts', contacts);
    return [200, contacts, {}];
  });
}

ContactsMock.$inject = ['$httpBackend','$log','StorageService'];

export default ContactsMock;
