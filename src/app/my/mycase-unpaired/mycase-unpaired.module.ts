import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycaseUnpairedPageRoutingModule } from './mycase-unpaired-routing.module';

import { MycaseUnpairedPage } from './mycase-unpaired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycaseUnpairedPageRoutingModule
  ],
  declarations: [MycaseUnpairedPage]
})
export class MycaseUnpairedPageModule {}
