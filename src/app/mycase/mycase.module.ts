import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  declarations: [MycasePage]
})
export class MycasePageModule {}
