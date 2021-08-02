import { CaseService } from './../service/case.service';
import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar , NavController} from '@ionic/angular';
import { Case } from '../models/case.model';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  // @ViewChild('search' , {static: false }) search: IonSearchbar;

  // public list: Array<Object> = [];
  // public searcheditem: any;

  cases: Case[] = [];

  constructor(
    private caseService: CaseService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.cases = this.caseService.getCases();
  }

  showDetail(selectedCase: Case){
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
}
