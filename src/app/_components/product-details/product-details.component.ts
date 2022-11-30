import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ProductDataService} from "../../_core/product-data.service";
import {ProductDetails} from "../../_models/ProductDetails";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data!: ProductDetails;

  constructor(
    private route: ActivatedRoute,
    private dataService: ProductDataService,
    private router: Router) {
  }

  ngOnInit(): void {
    //todo refactor
    this.route.paramMap.subscribe(e => {
      this.dataService.getProductDetails$(e.get('product') as string).subscribe(d => {
        if (d === undefined) {
          this.router.navigate(['404'])
        }
        this.data = d;
      })
    });
  }

}
