import { NavController } from '@ionic/angular';
import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, Input, OnInit, Output} from '@angular/core';
// import { EventEmitter } from 'stream';


@Component({
  selector: 'app-othercase-collect',
  templateUrl: './othercase-collect.page.html',
  styleUrls: ['./othercase-collect.page.scss'],
})

export class OthercaseCollectPage implements OnInit {

  @Input() othersearch: string;
  cases: Case[] = [];
  filteredCases: Case[] = [];

  constructor(
    private caseService: OthercaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getOTHERCOLLECTCASE();
    this.filteredCases = this.cases;
    console.log(this.othersearch);
  }

  showdetail(selectedCase: Case){
    this.navCtrl.navigateForward('othercase-collect/collect-detail/' + selectedCase.id)
  }

  // onChangeKeyword(event: any) {
  //   let keyword = event.target.value.trim();
  //   console.log(keyword);
  //   if (keyword !== '') {
  //     this.filteredCases = [];
  //     for (let aCase of this.cases) {
  //       if (aCase.content.includes(keyword) || aCase.hashtag.includes(keyword)) {
  //         this.filteredCases.push(aCase);
  //       }
  //     }
  //   } else {
  //     this.filteredCases = this.cases;
  //   }
  // }
}
