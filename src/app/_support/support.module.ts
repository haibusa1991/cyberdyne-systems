import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPartsComponent } from './order-parts/order-parts.component';
import {ViewComponentsModule} from "../_view-components/view-components.module";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderPartsService} from "../_core/order-parts.service";



@NgModule({
  declarations: [
    OrderPartsComponent
  ],
  imports: [
    CommonModule,
    ViewComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    OrderPartsComponent
  ],
  providers: [
  ]
})
export class SupportModule { }
