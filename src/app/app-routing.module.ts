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
import {RegComponent} from "./auth/reg/reg.component";
import {UserPanelComponent} from "./_view-components/user-panel/user-panel.component";
import {PasswordResetComponent} from "./_view-components/password-reset/password-reset.component";
import {LogoutComponent} from "./_view-components/logout/logout.component";
import {UserPanelGuard} from "./auth/user-panel.guard";

const routes: Routes = [
  {path: 'products/details/:product', component: ProductDetailsComponent},
  {path: 'products/catalogs/:catalog', component: ProductsCatalogComponent},
  {path: 'user/summary', component: UserPanelComponent, canActivate: [UserPanelGuard]},
  {path: 'user/var', component: VarComponent, canActivate: [UserPanelGuard]},
  {path: 'user/log-out', component: LogoutComponent, canActivate: [UserPanelGuard]},
  {path: 'home', component: HomeComponent},
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
