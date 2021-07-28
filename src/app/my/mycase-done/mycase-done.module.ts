import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycaseDonePageRoutingModule } from './mycase-done-routing.module';

import { MycaseDonePage } from './mycase-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycaseDonePageRoutingModule
  ],
  declarations: [MycaseDonePage]
})
export class MycaseDonePageModule {}
