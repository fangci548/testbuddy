import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { CASE } from './case.mock';


@Injectable({
  providedIn: 'root'
})
export class CaseService {

  cases: Case[] = CASE;
  constructor() { }


  getCases() {
    return this.cases;
  }

  getCase(id: number): Case {
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i].id === id) {
        return this.cases[i];
      }
    }
    return null;
  }



}
