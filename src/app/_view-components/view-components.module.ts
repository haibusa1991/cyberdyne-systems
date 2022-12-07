import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordResetComponent} from "./password-reset/password-reset.component";
import {UserPanelComponent} from "./user-panel/user-panel.component";
import { LogoutComponent } from './logout/logout.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    PasswordResetComponent,
    UserPanelComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class ViewComponentsModule { }
