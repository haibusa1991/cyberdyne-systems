import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ProductDataService} from "../../_core/contentProvider/product-data.service";
import {ProductDetails} from "../../_models/ProductDetails";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data: ProductDetails = {
    productId: 'string',
    name: 'string',
    image: 'string',
    description: 'string'};

  constructor(
    private route: ActivatedRoute,
    private dataService: ProductDataService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(e => {
       let product = e.get('product') as string;
       this.data = this.dataService.getProductDetails$(product);
       if (!this.data) {
         this.router.navigate(['404']);
       }
    });
  }

}
