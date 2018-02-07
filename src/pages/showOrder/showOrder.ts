import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { Order } from '../../models/order';
import {TWSOrders} from "../../providers/tws-orders/tws-orders";

@Component({
  selector: 'page-showOrder',
  templateUrl: 'showOrder.html'
})
export class ShowOrderPage {
  order: Order

  constructor(public navParams: NavParams) {
    this.order = this.navParams.get('order');
    // twsOrders.load().subscribe(orders => {
    //   this.order = order;
    // })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  show(order) {
    // this.navCtrl.push(S, {
    //   id: "123",
    //   name: "Carl"
    // });
  }
}
