import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./_shared/header/header.component";
import {FooterComponent} from "./_shared/footer/footer.component";
import {HomeComponent} from "./_components/home/home.component";
import { BackgroundComponent } from './_shared/background/background.component';
import { ProductCardComponent } from './_components/product-card/product-card.component';
import { ProductsComponent } from './_components/products/products.component';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';
import { CompanyComponent } from './_components/company/company.component';
import { ServicesComponent } from './_components/services/services.component';
import {RouterModule} from "@angular/router";
import { TosComponent } from './_components/tos/tos.component';
import { PpComponent } from './_components/pp/pp.component';
import { ProductDetailsComponent } from './_components/product-details/product-details.component';
import {ProductCatalogService} from "./_core/product-catalog.service";
import { ProductsCatalogComponent } from './_components/products-catalog/products-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BackgroundComponent,
    ProductCardComponent,
    ProductsComponent,
    PageNotFoundComponent,
    CompanyComponent,
    ServicesComponent,
    TosComponent,
    PpComponent,
    ProductDetailsComponent,
    ProductsCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ProductCatalogService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
