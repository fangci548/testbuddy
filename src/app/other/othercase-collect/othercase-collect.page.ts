import { NavController } from '@ionic/angular';
import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-othercase-collect',
  templateUrl: './othercase-collect.page.html',
  styleUrls: ['./othercase-collect.page.scss'],
})

export class OthercaseCollectPage implements OnInit {

  cases: Case[] = [];

  constructor(
    private caseService: OthercaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getOTHERCOLLECTCASE();
  }

  showdetail(selectedCase: Case){
    this.navCtrl.navigateForward('othercase-collect/collect-detail/' + selectedCase.id)
  }
}
