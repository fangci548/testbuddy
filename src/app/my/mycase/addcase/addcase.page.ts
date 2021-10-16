import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-addcase',
  templateUrl: './addcase.page.html',
  styleUrls: ['./addcase.page.scss'],
})
export class AddcasePage implements OnInit {
  items: Observable<any[]>;
  hashtag :string;
  content :string;
  title :string;
  pay: number;
  date: Date;


  constructor(
    public nav: NavController,
    private firestore: AngularFirestore
  ) {
    this.items = firestore.collection('case').valueChanges();
  }

  ngOnInit() {
  }

  goback() {
    this.nav.back();
    this.nav.navigateBack('/tabs/tab3');
  }

  addcase(){
    console.log(this.firestore);
    this.firestore.collection("case").add({
      title: this.content,
      pay: this.pay,
      content: this.content,
      hashtag: this.hashtag,
      collect: false,
      date: new Date()

    })
    this.goback();
  }

}
