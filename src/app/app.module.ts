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
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
