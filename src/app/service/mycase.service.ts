import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';
import { MYDONECASE } from './mycase.mock/mycase-done.mock';
import { MYUNPAIRCASE } from './mycase.mock/mycase-unpair.mock';
import { MYPAIRCASE } from './mycase.mock/mycase-pair.mock';

@Injectable({
  providedIn: 'root'
})
export class MycaseService {

  donecases: Case[] = MYDONECASE;
  paircases: Case[] = MYPAIRCASE;
  unpaircases: Case[] = MYUNPAIRCASE;

  constructor() { }

  getMyDoneCases(){
    return this.donecases;
  }

  getMyDoneCasess(id: number): Case {
    for (let i = 0; i < this.donecases.length; i++) {
      if (this.donecases[i].id === id) {
        return this.donecases[i];
      }
    }
    return null;
  }

  getMyUnpairedCases(){
    return this.unpaircases;
  }

  getMyUnpairedCasess(id: number): Case {
    for (let i = 0; i < this.unpaircases.length; i++) {
      if (this.unpaircases[i].id === id) {
        return this.unpaircases[i];
      }
    }
    return null;
  }

  getMyPairedCases(){
    return this.paircases;

  }

  getMyPairedCasess(id: number): Case {
    for (let i = 0; i < this.paircases.length; i++) {
      if (this.paircases[i].id === id) {
        return this.paircases[i];
      }
    }
    return null;
  }

}
