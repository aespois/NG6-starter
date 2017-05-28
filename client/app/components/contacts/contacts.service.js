class ContactsService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q
    this.contacts = [{ //esses contacts estão mockados direto no serviço, não usam o angular-mocks ainda
      "name": "Mcneil Payne",
      "phone": "+55 (832) 409-2318"
    }, {
      "name": "Mitzi Patterson",
      "phone": "+55 (820) 413-2975"
    }, {
      "name": "Blair Jordan",
      "phone": "+55 (944) 483-3534"
    }, {
      "name": "Walton Fulton",
      "phone": "+55 (986) 582-2748"
    }, {
      "name": "Black Evans",
      "phone": "+55 (886) 492-3379"
    }, {
      "name": "Hurst Banks",
      "phone": "+55 (843) 558-3725"
    }];
  }

  getContacts() {
    return this.$q( (resolve, reject) => { //retorna uma promessa para a controladora solicitante
      if (this.contacts) //verifica se a variável foi criada e a retorna
        resolve(this.contacts);
      else { //caso não tenha sido, busca os dados
        this.$http.get('/api/contacts')
          .then( (response) => response.data );
      }
    });
  }
}

ContactsService.$inject = ['$http','$q'];
export default ContactsService;