import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthercaseDonePageRoutingModule } from './othercase-done-routing.module';

import { OthercaseDonePage } from './othercase-done.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthercaseDonePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [OthercaseDonePage]
})
export class OthercaseDonePageModule {}
