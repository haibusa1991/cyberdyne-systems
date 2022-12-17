import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllProductsComponent} from "./all-products/all-products.component";
import {ProductsCatalogComponent} from "./products-catalog/products-catalog.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsCatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ]
})
export class ProductsModule { }
