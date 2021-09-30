
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.page.html',
  styleUrls: ['./account-manage.page.scss'],
})
export class AccountManagePage implements OnInit {

  constructor(
    public nav: NavController,

    ) {
  }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');
  }
}
