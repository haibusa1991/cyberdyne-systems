import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {SupportComponent} from "./support/support.component";
import {LogoutComponent} from './logout/logout.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CompanyComponent} from "./company/company.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PpComponent} from "./pp/pp.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductsComponent} from "./products/products.component";
import {ProductsCatalogComponent} from "./products-catalog/products-catalog.component";
import {RegisterComponent} from "./register/register.component";
import {ServicesComponent} from "./services/services.component";
import {TosComponent} from "./tos/tos.component";
import {VarComponent} from "./var/var.component";
import {BackgroundComponent} from "./_shared/background/background.component";
import {HeaderComponent} from "./_shared/header/header.component";
import {FooterComponent} from "./_shared/footer/footer.component";
import {PageNotFoundComponent} from "./_shared/page-not-found/page-not-found.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import { SpinnerOverlayComponent } from './_shared/spinner-overlay/spinner-overlay.component';
import { OrderPartsComponent } from './order-parts/order-parts.component';
import { RequestSupportComponent } from './request-support/request-support.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    CompanyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    PasswordResetComponent,
    PpComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductsCatalogComponent,
    RegisterComponent,
    ServicesComponent,
    TosComponent,
    SupportComponent,
    VarComponent,
    SpinnerOverlayComponent,
    OrderPartsComponent,
    RequestSupportComponent,
    UserSettingsComponent,
    UserSummaryComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BackgroundComponent,
    CompanyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    PasswordResetComponent,
    PpComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ProductsCatalogComponent,
    RegisterComponent,
    ServicesComponent,
    TosComponent,
    SupportComponent,
    VarComponent
  ]

})
export class ViewComponentsModule {
}
