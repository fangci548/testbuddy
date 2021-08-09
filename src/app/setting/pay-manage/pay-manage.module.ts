import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayManagePageRoutingModule } from './pay-manage-routing.module';

import { PayManagePage } from './pay-manage.page';
import { HeadPage } from 'src/app/head/head.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayManagePageRoutingModule
  ],
  declarations: [
    PayManagePage,
    HeadPage
  ]
})
export class PayManagePageModule {}
