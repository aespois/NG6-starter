class ContactsController {
  constructor(ContactsService) {
    this.titulo = 'Contacts';
    ContactsService.getContacts()
      .then( contacts => this.contacts = contacts );
  }
}

ContactsController.$inject = ['ContactsService'];
export default ContactsController;
