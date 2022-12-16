import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IOrder} from "../../_models/IOrder";
import {Utils} from "../../Utils";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {mergeMap} from "rxjs";
import {OrderPartsService} from "../../_core/order-parts.service";

interface IOrderDetails {
  rawTime: number;
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit {

  orderData!: IOrderDetails[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderPartsService: OrderPartsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      mergeMap(orderId => this.orderPartsService.getOrderById$(orderId.get('orderNo')!))
    ).subscribe(e => this.orderData = this.getOrderStatusList(e.data() as unknown as IOrder))
  }

  onBack() {
    this.router.navigate(['/support/summary'])
  }

  getOrderStatusList(order: IOrder):
    IOrderDetails[] {
    let output: IOrderDetails[] = [];

    for (let status of Object.entries(order.status)) {
      output.push({
        rawTime: +status[0],
        date: Utils.milisToDate(+status[0]),
        time: Utils.milisToTime(+status[0]),
        status: status[1]
      } as IOrderDetails)
    }

    output.sort((e1, e2) => {
      return e2.rawTime - e1.rawTime;
    })

    return output;
  }


}
