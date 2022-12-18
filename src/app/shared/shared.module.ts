import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackgroundComponent} from "./background/background.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SpinnerOverlayComponent} from "./spinner-overlay/spinner-overlay.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";
import { VerifyPasswordPromptComponent } from './verify-password-prompt/verify-password-prompt.component';



@NgModule({
  declarations: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerOverlayComponent,
    VerifyPasswordPromptComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerOverlayComponent,
    MatProgressSpinnerModule,
    VerifyPasswordPromptComponent
  ]


})
export class SharedModule { }
