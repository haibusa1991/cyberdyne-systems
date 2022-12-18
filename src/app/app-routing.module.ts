import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./base/home/home.component";
import {PageNotFoundComponent} from "./base/page-not-found/page-not-found.component";
import {CompanyComponent} from "./base/company/company.component";
import {AllProductsComponent} from "./products/all-products/all-products.component";
import {CompanyServicesComponent} from "./base/company-services/company-services.component";
import {TosComponent} from "./base/tos/tos.component";
import {PpComponent} from "./base/pp/pp.component";
import {ProductDetailsComponent} from "./products/product-details/product-details.component";
import {ProductsCatalogComponent} from "./products/products-catalog/products-catalog.component";
import {VarComponent} from "./support/var/var.component";
import {LoginComponent} from "./base/login/login.component";
import {RegisterComponent} from "./base/register/register.component";
import {SupportContainerComponent} from "./support/support-container/support-container.component";
import {PasswordResetComponent} from "./base/password-reset/password-reset.component";
import {LogoutComponent} from "./base/logout/logout.component";
import {UserPanelGuard} from "./core/guards/user-panel.guard";
import {SupportRequestComponent} from "./support/support-request/support-request.component";
import {UserSettingsComponent} from "./support/user-settings/user-settings.component";
import {NewPasswordComponent} from "./base/new-password/new-password.component";
import {PartOrderComponent} from "./support/part-order/part-order.component";
import {DashboardComponent} from "./support/dashboard/dashboard.component";
import {PartOrderDetailsComponent} from "./support/part-order-details/part-order-details.component";
import {SupportRequestDetailsComponent} from "./support/support-request-details/support-request-details.component";

const routes: Routes = [

  {path: 'products', component: AllProductsComponent},
  {path: 'products/details/:product', component: ProductDetailsComponent},
  {path: 'products/catalogs/:catalog', component: ProductsCatalogComponent},
  // {path: 'support', component: SupportContainerComponent, canActivate: [UserPanelGuard], children: [
  //     {path: 'summary', component: DashboardComponent},
  //     {path: 'order-parts', component: PartOrderComponent},
  //     {path: 'request-support', component: SupportRequestComponent},
  //     {path: 'var', component: VarComponent},
  //     {path: 'settings', component: UserSettingsComponent},
  //     {path: 'order-details/:orderNo', component: PartOrderDetailsComponent},
  //     {path: 'support-details/:supportRequestNo', component: SupportRequestDetailsComponent}
  //   ]
  {path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule)},
  {path: 'log-out', component: LogoutComponent, canActivate: [UserPanelGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: NewPasswordComponent},
  {path: 'services', component: CompanyServicesComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'terms-of-service', component: TosComponent},
  {path: 'privacy-policy', component: PpComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
