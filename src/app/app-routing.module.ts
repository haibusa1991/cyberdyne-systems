import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {PageNotFoundComponent} from "./_shared/page-not-found/page-not-found.component";
import {CompanyComponent} from "./_components/company/company.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
