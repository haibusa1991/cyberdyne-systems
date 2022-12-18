import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./services/auth.service";
import {PartsAndSupportService} from "./services/parts-and-support.service";
import {FilenamePipe} from './pipes/filename.pipe';
import {ContentProviderService} from "./services/content-provider.service";

@NgModule({
  declarations: [
    FilenamePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CookieService,
    AuthService,
    PartsAndSupportService,
    ContentProviderService
  ],
  exports: [
    FilenamePipe
  ]

})
export class CoreModule {
}
