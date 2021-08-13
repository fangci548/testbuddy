import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercaseRunningPageRoutingModule } from './othercase-running-routing.module';

import { OthercaseRunningPage } from './othercase-running.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercaseRunningPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [OthercaseRunningPage]
})
export class OthercaseRunningPageModule {}
