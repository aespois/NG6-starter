class ContactsEditorController {
  constructor() {
    
  }

  $onInit(){
    console.log('init');
  }

  $onChanges(changeObj){
    if(changeObj._contato)
      this.contato = this._contato;
  }

}

ContactsEditorController.$inject = [];
export default ContactsEditorController;
