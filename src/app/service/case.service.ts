import { Injectable } from '@angular/core';
import { SearchCase } from '../models/searchcase.model';
import { CASE } from './case.mock';


@Injectable({
  providedIn: 'root'
})

export class CaseService {

  cases: SearchCase[] = CASE;
  constructor() { }


  getCases() {
    return this.cases;
  }

  getCase(id: number): SearchCase {
    for (let i = 0; i < this.cases.length; i++) {
      if (this.cases[i].id === id) {
        return this.cases[i];
      }
    }
    return null;
  }


}
