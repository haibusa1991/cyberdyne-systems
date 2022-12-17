import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ContentProviderService} from "../../core/content-provider.service";
import {IProductDetails} from "../../models/IProductDetails";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails!: IProductDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentProvider: ContentProviderService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      mergeMap(productId => this.contentProvider
        .getProductDetailsById$(productId.get('product')!)
      )).subscribe({
      next: n => {
        this.productDetails = n;
        if (!this.productDetails) {
          this.router.navigate(['404']);
        }
      }
    });

  }

}
