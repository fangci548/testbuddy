import { SettingPage } from './../setting/setting.page';
import { HeadPage } from './../head/head.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import { SettingPageModule } from '../setting/setting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // SettingPageModule,
    Tab4PageRoutingModule
  ],
  declarations: [
    Tab4Page,
    HeadPage,
    SettingPage
  ]
})
export class Tab4PageModule {}
