import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {OrdersPage} from "../orders/orders";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  pass: string;
  isLogged: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  Signup() {
    let f = {user: this.user, pass: this.pass}
    if(f.user == 'user' && f.pass == 'password'){
      this.isLogged = true
    }
    if (this.isLogged) {
      this.navCtrl.setRoot(OrdersPage)
        .then(data => console.log(data),
          error => console.log(error))
    } else {
      console.log('Acces denegat')
    }
  }

}
