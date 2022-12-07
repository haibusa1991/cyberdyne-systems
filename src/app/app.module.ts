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
import { TosComponent } from './_components/tos/tos.component';
import { PpComponent } from './_components/pp/pp.component';
import { ProductDetailsComponent } from './_components/product-details/product-details.component';
import {ProductsCatalogService} from "./_core/contentProvider/products-catalog.service";
import { ProductsCatalogComponent } from './_components/products-catalog/products-catalog.component';
import {ProductDataService} from "./_core/contentProvider/product-data.service";
import { VarComponent } from './_components/var/var.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import {RegisterService} from "./auth/register.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./_core/core.module";
import { UserPanelComponent } from './_view-components/user-panel/user-panel.component';
import { PasswordResetComponent } from './_view-components/password-reset/password-reset.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ViewComponentsModule} from "./_view-components/view-components.module";

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
    ProductsCatalogComponent,
    VarComponent,
    LoginComponent,
    RegisterComponent,
    UserPanelComponent,
    PasswordResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    // ViewComponentsModule
  ],
  providers: [
    ProductsCatalogService,
    ProductDataService
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
