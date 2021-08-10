import { HeadPage } from './../../head/head.page';
import { OthercaseRunningPage } from './../othercase-running/othercase-running.page';
import { OthercaseDonePage } from './../othercase-done/othercase-done.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercasePageRoutingModule } from './othercase-routing.module';

import { OthercasePage } from './othercase.page';
import { OthercaseCollectPage } from '../othercase-collect/othercase-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercasePageRoutingModule
  ],
  declarations: [
    OthercasePage,
    OthercaseCollectPage,
    OthercaseDonePage,
    OthercaseRunningPage,
    HeadPage
  ]
})
export class OthercasePageModule {}
