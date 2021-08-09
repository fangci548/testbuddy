import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountManagePageRoutingModule } from './account-manage-routing.module';

import { AccountManagePage } from './account-manage.page';
import { HeadPage } from 'src/app/head/head.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountManagePageRoutingModule
  ],
  declarations: [
    AccountManagePage,
    HeadPage
  ]
})
export class AccountManagePageModule {}
