import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, Input, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-othercase-done',
  templateUrl: './othercase-done.page.html',
  styleUrls: ['./othercase-done.page.scss'],
})

export class OthercaseDonePage implements OnInit {
  @Input() othersearch: string;

  cases: Case[] = [];

  constructor(
    private caseService: OthercaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getOTHERDONECASE();
  }

  showDetail(selectedCase: Case) {
    this.navCtrl.navigateForward('othercase-done/detail/' + selectedCase.id)
  }

}
