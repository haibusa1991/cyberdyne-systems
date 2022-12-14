import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {


  constructor(private router:Router) {
  }

  onBack() {
    this.router.navigate(['/support/summary'])
  }
}
