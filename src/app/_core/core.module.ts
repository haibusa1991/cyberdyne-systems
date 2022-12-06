import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./auth/auth.service";
import {CookiesManagerService} from "./cookies-manager/cookies-manager.service";
import {ProductDataService} from "./contentProvider/product-data.service";
import {ProductsCatalogService} from "./contentProvider/products-catalog.service";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    CookieService,
    AuthService,
    CookiesManagerService,
    ProductDataService,
    ProductsCatalogService
  ],
  exports: [

  ]

})
export class CoreModule { }
