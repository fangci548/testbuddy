import { Case } from 'src/app/models/case.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MycaseService } from 'src/app/service/mycase.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  case? : Case;
  constructor(
    private route: ActivatedRoute,
    private caseService: MycaseService,
    public nav: NavController
  ) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getMyUnpairedCasess(caseId);
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab3');
  }
}
