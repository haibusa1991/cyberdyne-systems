import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { RegComponent } from './reg/reg.component'
import {RegisterService} from "./register.service";


@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RegisterService
  ]

})
export class AuthModule {

  constructor() {

  }



}
