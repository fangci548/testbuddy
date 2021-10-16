import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() id: number;
  @Input() hashtag: string;
  @Input() pay: number;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss();
  }
}
