import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercaseRunningPageRoutingModule } from './othercase-running-routing.module';

import { OthercaseRunningPage } from './othercase-running.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercaseRunningPageRoutingModule
  ],
  declarations: [OthercaseRunningPage]
})
export class OthercaseRunningPageModule {}
