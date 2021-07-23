import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MycasePageRoutingModule } from './mycase-routing.module';

import { MycasePage } from './mycase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycasePageRoutingModule
  ],
  declarations: [MycasePage]
})
export class MycasePageModule {

}


@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
