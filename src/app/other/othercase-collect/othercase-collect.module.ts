import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercaseCollectPageRoutingModule } from './othercase-collect-routing.module';

import { OthercaseCollectPage } from './othercase-collect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercaseCollectPageRoutingModule
  ],
  declarations: [OthercaseCollectPage]
})
export class OthercaseCollectPageModule {}
