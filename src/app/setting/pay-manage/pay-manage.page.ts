import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pay-manage',
  templateUrl: './pay-manage.page.html',
  styleUrls: ['./pay-manage.page.scss'],
})
export class PayManagePage implements OnInit {

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');
  }

}
