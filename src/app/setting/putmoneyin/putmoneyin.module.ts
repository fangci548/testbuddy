import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutmoneyinPageRoutingModule } from './putmoneyin-routing.module';

import { PutmoneyinPage } from './putmoneyin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutmoneyinPageRoutingModule
  ],
  declarations: [PutmoneyinPage]
})
export class PutmoneyinPageModule {}
