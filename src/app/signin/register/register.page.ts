import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  account: string;
  password: string;
  cpassword: string;
  exist: number = 0;
  toofew: number = 0;
  notsame: number = 0;
  nothing: number = 0;


  constructor(
    public afuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

  async register() {
    this.notsame = 0;
    this.exist = 0;
    this.toofew = 0;
    this.nothing = 0;
    const { account, password, cpassword } = this
    if(password !== cpassword){
      this.notsame = 1;
      return console.error("密碼不一致")
    }
    try {
      const res = await this.afuth.createUserWithEmailAndPassword(account + '@example.com', password)
      this.router.navigate([''])
    } catch (err) {
      console.dir(err)
      if (err.code === "auth/email-already-in-use") {
        this.exist = 1;
      }
      if (err.code === "auth/weak-password"){
        this.toofew = 1;
      }
      if (err.code === "auth/internal-error"){
        this.nothing = 1;
      }
    }
  }

}
