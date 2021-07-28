import { HeadPage } from './../head/head.page';
import { MycasePairedPage } from './../my/mycase-paired/mycase-paired.page';
import { MycaseDonePage } from './../my/mycase-done/mycase-done.page';
import { MycasePage } from '../my/mycase/mycase.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { MycasePageModule } from '../my/mycase/mycase.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { MycaseUnpairedPage } from '../my/mycase-unpaired/mycase-unpaired.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // MycasePageModule,
    // RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  declarations: [
    Tab3Page,
    HeadPage,
    MycasePage,
    MycaseDonePage,
    MycasePairedPage,
    MycaseUnpairedPage
  ]
})
export class Tab3PageModule {}
