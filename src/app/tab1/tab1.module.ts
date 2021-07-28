import { SearchPage } from './../search/search.page';
import { HeadPage } from './../head/head.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { SearchPageModule } from '../search/search.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // SearchPageModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    Tab1Page,
    HeadPage,
    SearchPage
  ]
})
export class Tab1PageModule {}
