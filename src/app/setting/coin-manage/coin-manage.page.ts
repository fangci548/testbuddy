import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coin-manage',
  templateUrl: './coin-manage.page.html',
  styleUrls: ['./coin-manage.page.scss'],
})
export class CoinManagePage implements OnInit {

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  goback(){
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');
  }

}
