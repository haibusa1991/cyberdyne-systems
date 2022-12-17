import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CompanyComponent} from "./company/company.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {CompanyServicesComponent} from "./company-services/company-services.component";
import {NewPasswordComponent} from "./new-password/new-password.component";
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {PpComponent} from "./pp/pp.component";
import {RegisterComponent} from "./register/register.component";
import {TosComponent} from "./tos/tos.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyServicesComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NewPasswordComponent,
    PageNotFoundComponent,
    PasswordResetComponent,
    PpComponent,
    RegisterComponent,
    TosComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  })
export class BaseModule { }
