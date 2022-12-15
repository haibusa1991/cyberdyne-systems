import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IOrder} from "../../_models/IOrder";
import {Utils} from "../../Utils";

interface IOrderDetails {
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})


export class OrderDetailsComponent implements OnInit{

  ordersPlaceholder: IOrder[] = [
    {
      id: '0000000',
      added: 1671022557521,
      isCancelled: false,
      partNo: 't800-0002',
      status: {
        1671022557521: 'Order received',
        1671022597521: 'Order Updated'
      }
    }
  ]

  orderData!: IOrderDetails[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.orderData = this.convertToOrderDetails(this.ordersPlaceholder[0]);
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  onBack() {
    this.router.navigate(['/support/summary'])
  }

  convertToOrderDetails(order: IOrder): IOrderDetails[] {
    let output: IOrderDetails[] = [];

    for (let status of Object.entries(order.status)) {
      output.push({
        date: Utils.milisToDate(+status[0]),
        time: Utils.milisToTime(+status[0]),
        status: status[1]
      } as IOrderDetails)
    }

    return output;
  }


}
