import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {PageNotFoundComponent} from "./_shared/page-not-found/page-not-found.component";
import {CompanyComponent} from "./_components/company/company.component";
import {ProductsComponent} from "./_components/products/products.component";
import {ServicesComponent} from "./_components/services/services.component";
import {TosComponent} from "./_components/tos/tos.component";
import {PpComponent} from "./_components/pp/pp.component";
import {ProductDetailsComponent} from "./_components/product-details/product-details.component";
import {ProductsCatalogComponent} from "./_components/products-catalog/products-catalog.component";
import {VarComponent} from "./_components/var/var.component";
import {LoginComponent} from "./_components/login/login.component";
import {RegisterComponent} from "./_components/register/register.component";
import {RegComponent} from "./auth/reg/reg.component";
import {UserPanelComponent} from "./_view-components/user-panel/user-panel.component";

const routes: Routes = [
  {path: 'products/details/:product', component: ProductDetailsComponent},
  {path: 'products/catalogs/:catalog', component: ProductsCatalogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'company', component: CompanyComponent},
  // {path: 'auth', component: RegComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserPanelComponent},
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
