import { OthercaseRunningPage } from '../other/othercase-running/othercase-running.page';
import { OthercaseDonePage } from '../other/othercase-done/othercase-done.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { OthercasePage } from '../other/othercase/othercase.page';
import { HeadPage } from '../head/head.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { OthercaseCollectPage } from '../other/othercase-collect/othercase-collect.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // RouterModule.forChild([{ path: '', component: Tab2Page }]),
    Tab2PageRoutingModule
  ],
  declarations: [
    Tab2Page,
    OthercasePage,
    HeadPage,
    OthercaseCollectPage,
    OthercaseRunningPage,
    OthercaseDonePage
  ]
})
export class Tab2PageModule {}
