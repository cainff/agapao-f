import { Component } from '@angular/core';

import { ForumPage } from '../forum/forum';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { GaleriePage } from '../galerie/galerie';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ForumPage;
  tab3Root = ContactPage;
  tab4Root = GaleriePage;

  constructor() {

  }
}
