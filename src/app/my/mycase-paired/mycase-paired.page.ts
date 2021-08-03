import { Component, OnInit } from '@angular/core';
import { Case } from './../../models/case.model';
import { MycaseService } from './../../service/mycase.service';


@Component({
  selector: 'app-mycase-paired',
  templateUrl: './mycase-paired.page.html',
  styleUrls: ['./mycase-paired.page.scss'],
})
export class MycasePairedPage implements OnInit {

  cases: Case[] = [];

  constructor(
    private caseService: MycaseService
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getMyPairedCases();
  }

}
