import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-putmoneyin',
  templateUrl: './putmoneyin.page.html',
  styleUrls: ['./putmoneyin.page.scss'],
})
export class PutmoneyinPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');

  }

}
