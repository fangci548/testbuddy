import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { OTHERDONECASE } from '../service/othercase.mock/othercase-done.mock';
import { OTHERCOLLECTCASE } from '../service/othercase.mock/othercase-collect.mock';
import { OTHERRUNCASE } from '../service/othercase.mock/othercase-running.mock';

@Injectable({
  providedIn: 'root'
})
export class OthercaseService {

  donecases: Case[] = OTHERDONECASE;
  runcases: Case[] = OTHERRUNCASE;
  collectcases: Case[] = OTHERCOLLECTCASE;

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
    return this.collectcases;
  }

  getOTHERCOLLECTCASEs(id: number): Case {
    for (let i = 0; i < this.collectcases.length; i++) {
      if (this.collectcases[i].id === id) {
        return this.collectcases[i];
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
