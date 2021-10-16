import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CaseService } from './../service/case.service';
import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar , NavController} from '@ionic/angular';
import { Case } from '../models/case.model';
import { Moment } from 'moment';
import { SearchCase } from '../models/searchcase.model';
import * as moment from 'moment';
// import { FirebaseDatabase, FirebaseFirestore } from 'angularfire2';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // @ViewChild('search' , {static: false }) search: IonSearchbar;

  // public list: Array<Object> = [];
  // public searcheditem: any;
  searchTerm: string;
  //cases: SearchCase[] = [];
  collect: boolean = false;
  date: Date = new Date('2021-09-10 00:15:37');
  items: Observable<any[]>;
  cases: Observable<any[]>;
  i: number = 26;
  constructor(
    private caseService: CaseService,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {
    this.cases = firestore.collection('case').valueChanges();
  }

  ngOnInit() {
    //this.cases = this.caseService.getCases();
  }

  showDetail(selectedCase){
    this.navCtrl.navigateForward('search/detail/'+selectedCase.id)
  }
  // ionViewDidEnter(){
  //   setTimeout(() => {
  //     this.search.setFocus();
  //   })
  // }

  // _ionchange(event){
  //   console.log(event.detail.value);
  //   const val = event.target.value;
  //   this.searcheditem = this.list;
  //   if (val && val.trim() != ''){
  //     this.searcheditem = this.searcheditem.filter((item: any) =>{
  //       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
// theDate: Date
  getDiferenceInDay() {
    // console.log(moment.calendarFormat(this.date.getTime() - new Date().getTime()) );
    // return Math.abs(this.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
    console.log(moment(moment().valueOf()).format('YYYY-MM-DD hh:mm'));

  }

  collectchange(selectedCase: SearchCase){
    //this.date = new Date();
    console.log(selectedCase.collect);
    if(selectedCase.collect == true){
      selectedCase.collect = false;
    }
    else{
      selectedCase.collect = true;
    }
    //console.log(this.getDiferenceInDay);
    console.log(selectedCase.collect);
    console.log(this.date);
  }



}
