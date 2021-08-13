import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GivemoneyPageRoutingModule } from './givemoney-routing.module';

import { GivemoneyPage } from './givemoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GivemoneyPageRoutingModule
  ],
  declarations: [GivemoneyPage]
})
export class GivemoneyPageModule {}
