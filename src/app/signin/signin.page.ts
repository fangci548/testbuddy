import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  account: string;
  password: string;
  validUser = true;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }



  ngOnInit() {
  }

  onSignin(){
    if (this.userService.isValidUser(this.account, this.password)) {
      this.router.navigate(['']);
    } else{
      this.validUser = false;
    }

  }
}
