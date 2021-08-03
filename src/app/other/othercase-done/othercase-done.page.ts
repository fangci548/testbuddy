import { Component, OnInit } from '@angular/core';
import { Case } from '../../models/case.model';
import { CaseService } from './../../service/case.service';

@Component({
  selector: 'app-othercase-done',
  templateUrl: './othercase-done.page.html',
  styleUrls: ['./othercase-done.page.scss'],
})

export class OthercaseDonePage implements OnInit {


  cases: Case[] = [];

  constructor(
    private caseService: CaseService) { }

  ngOnInit() {
    this.cases = this.caseService.getCases();
  }

}
