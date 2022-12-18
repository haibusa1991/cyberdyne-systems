import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartOrderComponent} from './part-order/part-order.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {PartOrderDetailsComponent} from './part-order-details/part-order-details.component';
import {SupportRequestDetailsComponent} from './support-request-details/support-request-details.component';
import {SupportContainerComponent} from "./support-container/support-container.component";
import {HttpClientModule} from "@angular/common/http";
import {FileSaverModule} from "ngx-filesaver";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {SupportRequestComponent} from "./support-request/support-request.component";
import {VarComponent} from "./var/var.component";
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {UserPanelGuard} from "../core/guards/user-panel.guard";

const routes:Routes = [
  {path: '', component: SupportContainerComponent, canActivate: [UserPanelGuard], children: [
      {path: 'summary', component: DashboardComponent},
      {path: 'order-parts', component: PartOrderComponent},
      {path: 'request-support', component: SupportRequestComponent},
      {path: 'var', component: VarComponent},
      {path: 'settings', component: UserSettingsComponent},
      {path: 'order-details/:orderNo', component: PartOrderDetailsComponent},
      {path: 'support-details/:supportRequestNo', component: SupportRequestDetailsComponent}
    ]}
];

@NgModule({
  declarations: [
    DashboardComponent,
    PartOrderComponent,
    PartOrderDetailsComponent,
    SupportContainerComponent,
    SupportRequestComponent,
    SupportRequestDetailsComponent,
    UserSettingsComponent,
    VarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    FileSaverModule,
    SharedModule
  ],
  exports: [
    // PartOrderComponent
  ],
  providers: []
})
export class SupportModule {
}
