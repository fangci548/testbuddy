import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-othercase',
  templateUrl: './othercase.page.html',
  styleUrls: ['./othercase.page.scss'],
})
export class OthercasePage implements OnInit {
  mode = "collect";
  constructor() { }

  // @Output() searchEvent = new EventEmitter();

  ngOnInit() {
  }

  // onChangeKeyword($event){
  //   let keyword = event.target.value.trim();
     // console.log(keyword);
  //   this.onChangeKeyword.emit(keyword);
  //   console.log(keyword);
  // }

}
