import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Case } from '../models/case.model';
import { MycaseService } from '../service/mycase.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  case?: Case;

  constructor(
    private route: ActivatedRoute,
    public nav: NavController,
    private caseService: MycaseService) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getMyPairedCasess(caseId);
  }


  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab3');
  }
}
