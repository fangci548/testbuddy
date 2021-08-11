import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Case } from 'src/app/models/case.model';
import { MycaseService } from 'src/app/service/mycase.service';

@Component({
  selector: 'app-mycase-unpaired',
  templateUrl: './mycase-unpaired.page.html',
  styleUrls: ['./mycase-unpaired.page.scss'],
})
export class MycaseUnpairedPage implements OnInit {

  cases: Case[] = [];

  constructor(
    private caseService: MycaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getMyUnpairedCases();
  }

  showdetail(selectedCase: Case){
    this.navCtrl.navigateForward('mycase-unpaired/detail/' + selectedCase.id)
  }
}
