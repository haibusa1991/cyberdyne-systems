import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IOrder} from "../../models/IOrder";
import {Utils} from "../../Utils";
import {mergeMap} from "rxjs";
import {PartsAndSupportService} from "../../core/services/parts-and-support.service";

interface IOrderDetails {
  rawTime: number;
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './part-order-details.component.html',
  styleUrls: ['./part-order-details.component.css']
})


export class PartOrderDetailsComponent implements OnInit {

  orderData!: IOrderDetails[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderPartsService: PartsAndSupportService) {
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
