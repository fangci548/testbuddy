import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasedetailPageRoutingModule } from './casedetail-routing.module';

import { CasedetailPage } from './casedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasedetailPageRoutingModule
  ],
  declarations: [CasedetailPage]
})
export class CasedetailPageModule {}
