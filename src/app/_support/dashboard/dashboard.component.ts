import {Component} from '@angular/core';
import {IOrder} from "../../_models/IOrder";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  ordersPlaceholder: IOrder[] = [
    {
      added: 1671022557521,
      isCancelled: false,
      partNo: 't800-0002',
      status: {
        1671022557521: 'Order received',
        1671022597521: 'Order Updated'
      }
    },
    {
      added: 1671022680652,
      isCancelled: false,
      partNo: 't800-0004',
      status: {
        1671022557521: 'Order cancelled',
        1671022597521: 'Money refunded'
      }
    }
  ]
}
