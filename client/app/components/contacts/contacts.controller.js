class ContactsController {
  constructor(ContactsService, $state) {
    this.titulo = 'Contacts';
    this.ContactsService = ContactsService;
    this.$state = $state;
    ContactsService.getContacts()
      .then( contacts => this.contacts = contacts );
  }

  $onInit(){
    this.editing = false;
  }

  novoContato(contato) {
    console.log(contato);
    if(contato && contato.name && contato.phone) {
      this.erro = 'Criando contato';
      this.ContactsService.createContact(contato.name, contato.phone)
        .then((contacts)=>{
          this.contacts = contacts;
          this.contato = {};
          this.erro = 'Contato criado com sucesso!';
        });
    } else {
      this.erro = 'Nome e telefone não podem estar vazios!'
    }
  }

  resetarContatos() {
    this.ContactsService.deleteContacts()
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Contatos resetados!';
      });
  }

  deletarContato(){
    this.ContactsService.deleteContact(this.contato.id)
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Contato deletado!';
        this.editing = false;
        delete this.contato;
      });
  }

  onContatoClicked(contato){
    this.contato = angular.copy(contato);
    this.editing = true;
    this.$state.go('contacts.edit');
  }

  modificarContato(){
    this.ContactsService.modifyContacts(this.contato.name, this.contato.phone, this.contato.id)
      .then((contacts)=>{
        this.contacts = contacts;
        this.erro = 'Contato alterado!';
        this.editing = false;
        delete this.contato;
      });
  }
}

ContactsController.$inject = ['ContactsService','$state'];
export default ContactsController;
