import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/models/case.model';
import { MycaseService } from 'src/app/service/mycase.service';

@Component({
  selector: 'app-mycase-unpaired',
  templateUrl: './mycase-unpaired.page.html',
  styleUrls: ['./mycase-unpaired.page.scss'],
})
export class MycaseUnpairedPage implements OnInit {

  cases: Case[] = [];

  constructor(
    private caseService: MycaseService
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getMyUnpairedCases();
  }

}
