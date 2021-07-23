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
      { name: "rrr", content: "想學java物件導向, 有學過C語言", hashtag: "#JAVA"},
      { name: "eee", content: "想學C語言, 從頭開始教", hashtag: "#C語言"},
      { name: "aaa", content: "高中歷史, 需輔導孩子完成參考書, 背誦口訣", hashtag: "#歷史"},
      { name: "bbb", content: "高一數學複習, 今年升高二, 暑期輔導", hashtag: "#數學"},
      { name: "ccc", content: "英文聽說讀寫, 準備多益", hashtag: "#多益"},
      { name: "ddd", content: "想學java物件導向, 有學過C語言", hashtag: "#JAVA"},
      { name: "aab", content: "想學C語言, 從頭開始教", hashtag: "#C語言"},
      { name: "baa", content: "高一數學複習, 今年升高二, 暑期輔導", hashtag: "#數學"},
      { name: "hhh", content: "高中歷史, 需輔導孩子完成參考書, 背誦口訣", hashtag: "#高中"},
      { name: "iii", content: "英文聽說讀寫, 準備多益", hashtag: "#讀寫"},
      { name: "jjj", content: "想學java物件導向, 有學過C語言", hashtag: "#JAVA"},
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
