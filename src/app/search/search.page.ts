import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('search' , {static: false }) search: IonSearchbar;

  public list: Array<Object> = [];
  public searcheditem: any;

  constructor() {
    this.list = [
      { title: "rrr"},
      { title: "eee"},
      { title: "aaa" },
      { title: "bbb" },
      { title: "ccc" },
      { title: "ddd" },
      { title: "aab" },
      { title: "baa" },
      { title: "hhh" },
      { title: "iii" },
      { title: "jjj" },
    ];
    this.searcheditem = this.list
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    setTimeout(() => {
      this.search.setFocus();
    })
  }

  _ionchange(event){
    console.log(event.detail.value);
    const val = event.target.value;
    this.searcheditem = this.list;
    if (val && val.trim() != ''){
      this.searcheditem = this.searcheditem.filter((item: any) =>{
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
