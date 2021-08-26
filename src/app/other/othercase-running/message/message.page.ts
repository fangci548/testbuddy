import { Case } from 'src/app/models/case.model';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { OthercaseService } from '../../../service/othercase.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  case?: Case;

  constructor(
    private route: ActivatedRoute,
    public nav: NavController,
    private caseService: OthercaseService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getOTHERRUNCASEs(caseId);
  }


  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab3');
  }

  async openModal(){

    const modal = await this.modalCtrl.create({
      component: MessageModalComponent,
      componentProps: {title: this.case.userName, content: this.case.content, id: this.case.id, hashtag: this.case.hashtag, pay: this.case.pay}
    });

    await modal.present();
  }
}
