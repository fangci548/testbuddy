import { NavController } from '@ionic/angular';
import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, Input, OnInit, Output} from '@angular/core';
import { SearchCase } from 'src/app/models/searchcase.model';


@Component({
  selector: 'app-othercase-collect',
  templateUrl: './othercase-collect.page.html',
  styleUrls: ['./othercase-collect.page.scss'],
})

export class OthercaseCollectPage implements OnInit {

  @Input() othersearch: string;
  cases: SearchCase[] = [];
  filteredCases: SearchCase[] = [];
  collectcase : SearchCase[] = [];
  //filterargs = { collect: 'true' };
  constructor(
    private caseService: OthercaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getOTHERCOLLECTCASE();
    this.filteredCases = this.cases;
    console.log(this.cases[0].userName);
    // this.collectcase = this.cases.filter(this.filterByID);
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
  // filterByID(item) {
  //   if (item.collect === 1) {
  //     return true;
  //   }
  //   return false;
  // }
  // filterDouble = this.cases.filter(function (item, index, array) {
  //   return item.collect === 1;    // 取得陣列中雙數的物件
  // });
  collectchange(selectedCase: SearchCase) {
    //this.date = new Date();
    console.log(selectedCase.collect);
    if (selectedCase.collect == true) {
      selectedCase.collect = false;
    }
    else {
      selectedCase.collect = true;
    }
    //console.log(this.getDiferenceInDay);
    console.log(selectedCase.collect);
  }


}
