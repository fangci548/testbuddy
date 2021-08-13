import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycaseDonePageRoutingModule } from './mycase-done-routing.module';

import { MycaseDonePage } from './mycase-done.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycaseDonePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MycaseDonePage]
})
export class MycaseDonePageModule {}
