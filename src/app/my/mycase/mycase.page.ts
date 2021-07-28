import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycase',
  templateUrl: './mycase.page.html',
  styleUrls: ['./mycase.page.scss'],
})

export class MycasePage implements OnInit {

  mode = "paired";
  constructor() { }

  ngOnInit() {
  }

}
