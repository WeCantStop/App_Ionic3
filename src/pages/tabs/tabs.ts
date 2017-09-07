import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home';
  tab2Root = 'about';
  tab3Root = 'contact';
  tab4Root = 'find';
  tab5Root = 'my';

  constructor() {

  }
}
