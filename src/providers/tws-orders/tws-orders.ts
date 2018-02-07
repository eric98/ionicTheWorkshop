import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Order } from '../../models/order';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TWSOrders {
  TWSOTApiUrl = 'http://app.theworkshop.es:6969';

  constructor(public http: HttpClient) { }

  load(): Observable<Order[]> {
    return this.http.get(`${this.TWSOTApiUrl}/TWSP/rest/orders/ZCOND223`)
  }
}
