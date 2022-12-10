import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { RegComponent } from './reg/reg.component'
import {RegisterService} from "./register.service";
import {CookieService} from "ngx-cookie-service";


@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RegisterService,
    CookieService
  ]

})
export class AuthModule {

  constructor() {

  }



}
