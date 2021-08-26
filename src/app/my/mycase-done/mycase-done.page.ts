import { MycaseService } from './../../service/mycase.service';
import { Component, Input, OnInit } from '@angular/core';
import { Case } from './../../models/case.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mycase-done',
  templateUrl: './mycase-done.page.html',
  styleUrls: ['./mycase-done.page.scss'],
})
export class MycaseDonePage implements OnInit {

  cases: Case[] = [];
  @Input() mysearch: string;
  constructor(
    private caseService: MycaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getMyDoneCases();
  }

  showDetail(selectedCase: Case) {
    this.navCtrl.navigateForward('mycase-done/detail/' + selectedCase.id)
  }
}
