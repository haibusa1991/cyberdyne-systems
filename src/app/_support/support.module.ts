import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPartsComponent } from './order-parts/order-parts.component';
import {ViewComponentsModule} from "../_view-components/view-components.module";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderPartsService} from "../_core/order-parts.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterLink} from "@angular/router";
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SupportDetailsComponent } from './support-details/support-details.component';



@NgModule({
  declarations: [
    OrderPartsComponent,
    DashboardComponent,
    OrderDetailsComponent,
    SupportDetailsComponent
  ],
    imports: [
        CommonModule,
        ViewComponentsModule,
        ReactiveFormsModule,
        RouterLink
    ],
  exports: [
    OrderPartsComponent
  ],
  providers: [
  ]
})
export class SupportModule { }
