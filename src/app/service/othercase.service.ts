import { SearchCase } from './../models/searchcase.model';
import { CASE } from './case.mock';
import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { OTHERDONECASE } from '../service/othercase.mock/othercase-done.mock';
//import { OTHERCOLLECTCASE } from '../service/othercase.mock/othercase-collect.mock';
import { OTHERRUNCASE } from '../service/othercase.mock/othercase-running.mock';

@Injectable({
  providedIn: 'root'
})
export class OthercaseService {

  donecases: Case[] = OTHERDONECASE;
  runcases: Case[] = OTHERRUNCASE;
  Cases: SearchCase[] = CASE;

  constructor() { }

  getOTHERDONECASE(){
    return this.donecases;
  }

  getOTHERDONECASEs(id: number): Case {
    for (let i = 0; i < this.donecases.length; i++) {
      if (this.donecases[i].id === id) {
        return this.donecases[i];
      }
    }
    return null;
  }

  getOTHERCOLLECTCASE(){
    var collect = this.Cases.filter(function (item, index, array) {

      return item.collect === true;
    });
    return collect;
  }

  // getcollectcase(): SearchCase{
  //   return this.Cases;
  // }

  getOTHERCOLLECTCASEs(id: number): SearchCase {
    for (let i = 0; i < this.Cases.length; i++) {

      if (this.Cases[i].id === id) {
        return this.Cases[i];
      }
    }
    return null;
  }

  getOTHERRUNCASE(){
    return this.runcases;
  }

  getOTHERRUNCASEs(id: number): Case {
    for (let i = 0; i < this.runcases.length; i++) {
      if (this.runcases[i].id === id) {
        return this.runcases[i];
      }
    }
    return null;
  }
}
