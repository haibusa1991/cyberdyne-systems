import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./_view-components/home/home.component";
import {PageNotFoundComponent} from "./_view-components/_shared/page-not-found/page-not-found.component";
import {CompanyComponent} from "./_view-components/company/company.component";
import {ProductsComponent} from "./_view-components/products/products.component";
import {ServicesComponent} from "./_view-components/services/services.component";
import {TosComponent} from "./_view-components/tos/tos.component";
import {PpComponent} from "./_view-components/pp/pp.component";
import {ProductDetailsComponent} from "./_view-components/product-details/product-details.component";
import {ProductsCatalogComponent} from "./_view-components/products-catalog/products-catalog.component";
import {VarComponent} from "./_view-components/var/var.component";
import {LoginComponent} from "./_view-components/login/login.component";
import {RegisterComponent} from "./_view-components/register/register.component";
import {SupportComponent} from "./_view-components/support/support.component";
import {PasswordResetComponent} from "./_view-components/password-reset/password-reset.component";
import {LogoutComponent} from "./_view-components/logout/logout.component";
import {UserPanelGuard} from "./_core/auth/user-panel.guard";
import {RequestSupportComponent} from "./_support/request-support/request-support.component";
import {UserSettingsComponent} from "./_view-components/user-settings/user-settings.component";
import {AuthComponent} from "./_view-components/auth/auth.component";
import {OrderPartsComponent} from "./_support/order-parts/order-parts.component";
import {DashboardComponent} from "./_support/dashboard/dashboard.component";
import {OrderDetailsComponent} from "./_support/order-details/order-details.component";
import {SupportDetailsComponent} from "./_support/support-details/support-details.component";

const routes: Routes = [
  {path: 'products/details/:product', component: ProductDetailsComponent},
  {path: 'products/catalogs/:catalog', component: ProductsCatalogComponent},
  {path: 'support', component: SupportComponent, canActivate:[UserPanelGuard], children: [
      {path: 'summary', component: DashboardComponent},
      {path: 'order-parts', component: OrderPartsComponent},
      {path: 'request-support', component: RequestSupportComponent},
      {path: 'var', component: VarComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'order-details/:orderNo', component: OrderDetailsComponent},
      {path: 'support-details/:supportNo', component: SupportDetailsComponent}
    ]},
  {path: 'log-out', component: LogoutComponent, canActivate:[UserPanelGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
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
