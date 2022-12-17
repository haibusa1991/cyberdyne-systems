import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartOrderComponent} from './part-order/part-order.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterLink, RouterOutlet} from "@angular/router";
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
    PartOrderComponent
  ],
  providers: []
})
export class SupportModule {
}
