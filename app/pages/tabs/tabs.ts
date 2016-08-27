import {Component} from '@angular/core';
import {KePage} from '../ke/ke';
import {HeatPage} from '../heat/heat';
import {EcmPage} from '../ecm/ecm';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = KePage;
    this.tab2Root = HeatPage;
    this.tab3Root = EcmPage;
    this.tab4Root = ContactPage;
  }
}
