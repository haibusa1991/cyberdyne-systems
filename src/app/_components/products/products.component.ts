import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductCatalogService} from "../../_core/product-catalog.service";
import {ProductData} from "../../_models/ProductData";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsData: ProductData[];


  constructor(private productsService: ProductCatalogService) {
    this.productsData = [];
  }

  ngOnInit(): void {
    this.productsData = this.productsService.getProducts();
    console.log(this.productsData)
  }

}
