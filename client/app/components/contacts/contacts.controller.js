class ContactsController {
  constructor(ContactsService) {
    this.titulo = 'Contacts';
    this.ContactsService = ContactsService;
    ContactsService.getContacts()
      .then( contacts => this.contacts = contacts );
  }

  novoContato(){
    if(this.contato && this.contato.name && this.contato.phone) {
      this.erro = 'Criando contato';
      this.ContactsService.createContact(this.contato.name, this.contato.phone)
        .then((contacts)=>{
          this.contacts = contacts;
          delete this.contato;
          this.erro = 'Contato criado com sucesso!';
        });
    } else{
      this.erro = 'Nome e telefone não podem estar vazios!'
    }
  }

  resetarContatos(){
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
    console.log(contato);
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

ContactsController.$inject = ['ContactsService'];
export default ContactsController;
