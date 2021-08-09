import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Case } from 'src/app/models/case.model';
import { OthercaseService } from 'src/app/service/othercase.service';

@Component({
  selector: 'app-collect-detail',
  templateUrl: './collect-detail.page.html',
  styleUrls: ['./collect-detail.page.scss'],
})
export class CollectDetailPage implements OnInit {

  case?: Case;

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
}
