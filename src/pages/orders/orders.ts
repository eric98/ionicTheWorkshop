import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Order } from '../../models/order';
import {TWSOrders} from "../../providers/tws-orders/tws-orders";
import {ShowOrderPage} from "../showOrder/showOrder";

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  orders: Order[]

  constructor(public navCtrl: NavController, private twsOrders: TWSOrders) {
    twsOrders.load().subscribe(orders => {
      this.orders = orders;
    })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  show(order) {
    this.navCtrl.push(ShowOrderPage, {
      order: order
    });
  }
}
