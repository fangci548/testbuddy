import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othercase',
  templateUrl: './othercase.page.html',
  styleUrls: ['./othercase.page.scss'],
})
export class OthercasePage implements OnInit {
  mode = "collect";
  constructor() { }

  ngOnInit() {
  }

}
