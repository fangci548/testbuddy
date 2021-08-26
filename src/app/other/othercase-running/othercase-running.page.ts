import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, Input, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-othercase-running',
  templateUrl: './othercase-running.page.html',
  styleUrls: ['./othercase-running.page.scss'],
})
export class OthercaseRunningPage implements OnInit {

  @Input() othersearch: string;
  cases: Case[] = [];

  constructor(
    private caseService: OthercaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService. getOTHERRUNCASE();
  }

  showDetail(selectedCase: Case) {
    this.navCtrl.navigateForward('othercase-running/detail/' + selectedCase.id)
  }

}
