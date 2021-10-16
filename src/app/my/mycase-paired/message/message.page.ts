import { Case } from 'src/app/models/case.model';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { MycaseService } from '../../../service/mycase.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  case?: Case;
  items: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    public nav: NavController,
    private caseService: MycaseService,
    private modalCtrl: ModalController,
    // private firedatabase: AngularFireDatabase
    ) {
    //this.items = firedatabase.list('firstchat').valueChanges();
    }

  ngOnInit() {
    const caseId = Number(this.route.snapshot.params.id);
    this.case = this.caseService.getMyPairedCasess(caseId);
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
