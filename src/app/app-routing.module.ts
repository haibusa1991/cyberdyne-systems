import {NgModule} from '@angular/core';
import {RouterFeatures, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {PageNotFoundComponent} from "./_shared/page-not-found/page-not-found.component";
import {CompanyComponent} from "./_components/company/company.component";
import {ProductsComponent} from "./_components/products/products.component";
import {ServicesComponent} from "./_components/services/services.component";
import {TosComponent} from "./_components/tos/tos.component";
import {PpComponent} from "./_components/pp/pp.component";
import {ProductDetailsComponent} from "./_components/product-details/product-details.component";
import * as path from "path";
import {ProductsCatalogComponent} from "./_components/products-catalog/products-catalog.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'products', component: ProductsComponent, children: [
      {path: 'details/:product', component: ProductDetailsComponent},
      {path: ':catalog', component: ProductsCatalogComponent}
    ]
  },
  {path: 'services', component: ServicesComponent},
  {path: 'company', component: CompanyComponent},
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
