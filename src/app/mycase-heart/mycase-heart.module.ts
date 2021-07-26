import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycaseHeartPageRoutingModule } from './mycase-heart-routing.module';

import { MycaseHeartPage } from './mycase-heart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycaseHeartPageRoutingModule
  ],
  declarations: [MycaseHeartPage]
})
export class MycaseHeartPageModule {}
