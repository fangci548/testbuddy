import { OthercaseService } from './../../service/othercase.service';
import { Case } from '../../models/case.model';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-othercase-running',
  templateUrl: './othercase-running.page.html',
  styleUrls: ['./othercase-running.page.scss'],
})
export class OthercaseRunningPage implements OnInit {

  @Input() othersearch: string;
  cases: Case[] = [];

  constructor(
    private caseService: OthercaseService) { }

  ngOnInit() {
    this.cases = this.caseService. getOTHERRUNCASE();
  }

}
