import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Order } from '../../models/order';
import {TWSOrders} from "../../providers/tws-orders/tws-orders";

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
}
