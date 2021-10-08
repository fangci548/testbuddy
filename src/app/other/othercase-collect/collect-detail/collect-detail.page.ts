import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Case } from 'src/app/models/case.model';
import { SearchCase } from 'src/app/models/searchcase.model';
import { OthercaseService } from 'src/app/service/othercase.service';

@Component({
  selector: 'app-collect-detail',
  templateUrl: './collect-detail.page.html',
  styleUrls: ['./collect-detail.page.scss'],
})
export class CollectDetailPage implements OnInit {

  case?: SearchCase;

  constructor(
    private route: ActivatedRoute,
    private caseService: OthercaseService,
    public nav: NavController

  ) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getOTHERCOLLECTCASEs(caseId);
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab2');
  }
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
