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
}

ContactsService.$inject = ['$http','$q'];
export default ContactsService;