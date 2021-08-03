import { Case } from '../../models/case.model';
import { CaseService } from './../../service/case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othercase-collect',
  templateUrl: './othercase-collect.page.html',
  styleUrls: ['./othercase-collect.page.scss'],
})

export class OthercaseCollectPage implements OnInit {

  cases: Case[] = [];

  constructor(
    private caseService: CaseService) { }

  ngOnInit() {
    this.cases = this.caseService.getCases();
  }
}
