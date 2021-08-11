import { MycaseUnpairedPage } from './../mycase-unpaired/mycase-unpaired.page';
import { MycasePairedPage } from './../mycase-paired/mycase-paired.page';
import { MycaseDonePage } from './../mycase-done/mycase-done.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MycasePageRoutingModule } from './mycase-routing.module';

import { MycasePage } from './mycase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycasePageRoutingModule
  ],
  declarations: [
    MycasePage,
    MycaseDonePage,
    MycasePairedPage,
    MycaseUnpairedPage
  ]
})
export class MycasePageModule {

}

