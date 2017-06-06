class ContactsService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getContacts() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.contacts) //verifica se a variável foi criada e a retorna
        resolve(this.contacts);
      else { //caso não tenha sido, busca os dados
        this.$http.get('/api/contacts')
          .then( (response) => resolve(response.data) );
      }
    });
  }

  createContact(_name, _phone) {
    return this.$http.post('/api/contacts', {name:_name, phone:_phone})
    .then( (response)=>response.data ); // 'return response.data' está implícito.
  }

  deleteContacts(){
    return this.$http.delete(`/api/contacts`)
    .then( (response)=>response.data ); // 'return response.data' está implícito.
  }
  
  deleteContact(id){
    return this.$http.delete(`/api/contacts/${id}`)
    .then( (response)=>response.data ); // 'return response.data' está implícito.
  }

  modifyContacts(_name, _phone, id) {
    return this.$http.put(`/api/contacts/${id}`, {name:_name, phone:_phone})
    .then( (response)=>response.data ); // 'return response.data' está implícito.
  }
}

ContactsService.$inject = ['$http','$q'];
export default ContactsService;