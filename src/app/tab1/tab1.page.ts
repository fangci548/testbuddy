import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  // _ionchange(event) {
  //   console.log(event.detail.value);
  //   const val = event.target.value;
  //   this.searcheditem = this.list;
  //   if (val && val.trim() != '') {
  //     this.searcheditem = this.searcheditem.filter((item: any) => {
  //       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

}
