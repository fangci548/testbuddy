import { HeadPage } from './../../../head/head.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectDetailPageRoutingModule } from './collect-detail-routing.module';

import { CollectDetailPage } from './collect-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectDetailPageRoutingModule
  ],
  declarations: [
    CollectDetailPage,
    HeadPage
  ]
})
export class CollectDetailPageModule {}
