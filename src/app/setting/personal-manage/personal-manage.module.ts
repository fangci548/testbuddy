import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalManagePageRoutingModule } from './personal-manage-routing.module';

import { PersonalManagePage } from './personal-manage.page';
import { HeadPage } from 'src/app/head/head.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalManagePageRoutingModule
  ],
  declarations: [
    PersonalManagePage,
    HeadPage
  ]
})
export class PersonalManagePageModule {}
