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

  getOTHERCOLLECTCASE(){
    return this.collectcases;
  }

  getOTHERRUNCASE(){
    return this.runcases;

  }

}
