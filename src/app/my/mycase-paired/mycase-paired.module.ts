import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycasePairedPageRoutingModule } from './mycase-paired-routing.module';

import { MycasePairedPage } from './mycase-paired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycasePairedPageRoutingModule
  ],
  declarations: [MycasePairedPage]
})
export class MycasePairedPageModule {}
