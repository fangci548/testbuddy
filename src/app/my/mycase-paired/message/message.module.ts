import { MessageModalComponent } from './message-modal/message-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule
  ],
  declarations: [
    MessagePage,
    MessageModalComponent
  ],
  entryComponents: [MessageModalComponent]
})
export class MessagePageModule {}
