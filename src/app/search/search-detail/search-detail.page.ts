import { CaseService } from './../../service/case.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { SearchCase } from 'src/app/models/searchcase.model';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit {

  case?: SearchCase;

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService,
    public nav: NavController

  ) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getCase(caseId);
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab1');
  }

  collectchange(selectedCase: SearchCase) {
    console.log(selectedCase.collect);
    if (selectedCase.collect == true) {
      selectedCase.collect = false;
    }
    else {
      selectedCase.collect = true;
    }
    console.log(selectedCase.collect);
  }
}
