import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductsCatalogService} from "../../_core/contentProvider/products-catalog.service";
import {ProductData} from "../../_models/ProductData";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductData[]=[];


  constructor(private productsService: ProductsCatalogService) {

  }

  ngOnInit(): void {

    this.productsService.getAllProducts$().subscribe({
      next: e=> {
        this.products = e as ProductData[];
      }
    });
  }

}
