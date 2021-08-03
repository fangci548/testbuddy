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

  getMyUnpairedCases(){
    return this.unpaircases;
  }

  getMyPairedCases(){
    return this.paircases;

  }

}
