import {Component, OnInit} from '@angular/core';
import {IProductCatalog} from "../../models/IProductCatalog";
import {ContentProviderService} from "../../core/content-provider.service";

@Component({
  selector: 'app-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: IProductCatalog[]=[];

  constructor(private contentProvider:ContentProviderService) {

  }

  ngOnInit(): void {

    this.contentProvider.getProductCatalogs$().subscribe({
      next: e=> {
        this.products.push(e);
      }
    });
  }

}
