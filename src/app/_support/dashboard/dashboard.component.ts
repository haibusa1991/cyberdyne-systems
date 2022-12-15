import {Component, OnInit} from '@angular/core';
import {IOrder} from "../../_models/IOrder";
import {OrderPartsService} from "../../_core/order-parts.service";
import * as util from "util";
import {Utils} from "../../Utils";
import {combineLatest, concat, delay, flatMap, mergeMap, Observable, of, switchMap, tap} from "rxjs";
import {ISparePart} from "../../_models/ISparePart";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: IOrder[] = [];
  parts: ISparePart[] = [];
  canShow: boolean = false;

  constructor(private orderPartsService: OrderPartsService) {

  }

  ngOnInit(): void {

    this.orderPartsService.getAllUserOrders$().pipe(
      tap(t => {
        this.orders.push(t);
        this.canShow = true;
      }),
      mergeMap(e => this.orderPartsService.getPartInfoByPartNo$(e.partNo)),
    ).subscribe(n => {
      this.parts.push(n);
    })

    //
    // setTimeout(() => console.log(this.orders), 500);
    // setTimeout(() => console.log(this.parts), 500);

  }

  getOrderDate(milis: number): string {
    return Utils.milisToDate(milis);
  }

  getOrderDescription(partNo: string) {
    return new Observable(n => {

      if (this.parts.length < 1) {
        n.next('Loading...');
      } else {
        let result = 'error';
        if (this.parts.filter(e => e.partNo == partNo).length > 0) {
         result = this.parts.filter(e => e.partNo == partNo)[0].shortName;
        }
        n.next(result);
      }
    })
  }
}
