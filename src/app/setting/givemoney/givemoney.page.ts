import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-givemoney',
  templateUrl: './givemoney.page.html',
  styleUrls: ['./givemoney.page.scss'],
})
export class GivemoneyPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');

  }

}
