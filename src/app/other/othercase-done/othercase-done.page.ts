import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-othercase-done',
  templateUrl: './othercase-done.page.html',
  styleUrls: ['./othercase-done.page.scss'],
})

export class OthercaseDonePage implements OnInit {


  cases: Case[] = [];

  constructor(
    private caseService: OthercaseService) { }

  ngOnInit() {
    this.cases = this.caseService.getOTHERDONECASE();
  }

}
