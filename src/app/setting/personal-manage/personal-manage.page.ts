import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Case } from './../../models/case.model';


@Component({
  selector: 'app-personal-manage',
  templateUrl: './personal-manage.page.html',
  styleUrls: ['./personal-manage.page.scss'],
})
export class PersonalManagePage implements OnInit {

  cases: Case[] = [];

  constructor(public nav: NavController) {
  }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab4');

  }
}
