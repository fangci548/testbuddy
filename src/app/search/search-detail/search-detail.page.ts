import { CaseService } from './../../service/case.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Case } from '../../models/case.model';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.page.html',
  styleUrls: ['./search-detail.page.scss'],
})
export class SearchDetailPage implements OnInit {

  case?: Case;

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService

  ) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getCase(caseId);
  }

}
