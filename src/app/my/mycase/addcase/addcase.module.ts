import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadPage } from './../../../head/head.page';

import { IonicModule } from '@ionic/angular';

import { AddcasePageRoutingModule } from './addcase-routing.module';

import { AddcasePage } from './addcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcasePageRoutingModule
  ],
  declarations: [
    AddcasePage,
    HeadPage
  ]
})
export class AddcasePageModule {}
