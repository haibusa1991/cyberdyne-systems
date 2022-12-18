import {Component, OnInit} from '@angular/core';
import {IOrder} from "../../models/IOrder";
import {PartsAndSupportService} from "../../core/services/parts-and-support.service";
import {Utils} from "../../Utils";
import {mergeMap, Observable, of, tap} from "rxjs";
import {ISparePart} from "../../models/ISparePart";
import {ISupportRequest} from "../../models/ISupportRequest";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: IOrder[] = [];
  parts: ISparePart[] = [];
  requests: ISupportRequest[] = [];

  constructor(private partsAndSupportService: PartsAndSupportService) {

  }

  ngOnInit(): void {

    this.partsAndSupportService.getAllOrdersForCurrentUser$().pipe(
      tap(t => {
        if (!t) return;
        this.orders.push({...t, lastStatus: this.getLastStatus(t),} as IOrder);
      }),
      mergeMap(e => {
          if (!e) return of(null);
          return this.partsAndSupportService.getPartInfoByPartNo$(e.partNo)
        }
      )
    ).subscribe(n => {
      if (!n) return;
      this.parts.push(n);
    })

    this.partsAndSupportService.getAllRequestsForCurrentUser$().subscribe(n => {
      if (!n) return;
      this.requests.push({...n, lastStatus: this.getLastStatus(n)} as ISupportRequest);
    })

    // todo clean
    // setTimeout(() => console.log(this.orders), 500);
    // setTimeout(() => console.log(this.parts), 500);
    // setTimeout(() => console.log(this.requests), 500);

  }

  getPutDate(milis: number): string {
    return Utils.milisToDate(milis);
  }

  getOrderDescription(partNo: string) {
    return new Observable(n => {

      if (this.parts.length < 1) {
        n.next('Loading...');
      } else {
        let part = this.parts.find(e => e.partNo == partNo);
        if (!part) {
          n.next('error');
          return;
        }
        n.next(part.shortName);
      }
    })
  }

  getLastStatus(order: IOrder | ISupportRequest): string {
    let allStatuses = Object.entries(order.status);
    allStatuses.sort((e1, e2) => {
      return +e2[0] - +e1[0];
    })
    return allStatuses[0][1];
  }
}
