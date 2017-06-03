class NavbarController {
  constructor() {
  }
  
  init(){
    this.isNavBarCollapsed = false;
    this.toggleNavBar = () => this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }
  
  toggleNavBar() {
    this.isNavBarCollapsed = !this.isNavBarCollapsed;
  }
}

export default NavbarController;
