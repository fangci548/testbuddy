import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.page.html',
  styleUrls: ['./addcase.page.scss'],
})
export class AddcasePage implements OnInit {

  constructor(
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab3');
  }

}
