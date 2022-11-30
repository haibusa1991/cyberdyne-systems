import {Component, Input, OnInit} from '@angular/core';
import {ProductData} from "../../_models/ProductData";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //@ts-ignore
  @Input() productData: ProductData;
  title = '';

  constructor(public route: ActivatedRoute ) {
  }

  ngOnInit(): void {
  }

}
