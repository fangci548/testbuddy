import { HeadPage } from './../../head/head.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinManagePageRoutingModule } from './coin-manage-routing.module';

import { CoinManagePage } from './coin-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinManagePageRoutingModule
  ],
  declarations: [
    CoinManagePage,
    HeadPage
  ]
})
export class CoinManagePageModule {}
