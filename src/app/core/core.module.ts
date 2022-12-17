import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "./auth/auth.service";
import {CookiesManagerService} from "./cookies-manager/cookies-manager.service";
import {PartsAndSupportService} from "./parts-and-support.service";
import {FilenamePipe} from './filename.pipe';
import {ContentProviderService} from "./content-provider.service";

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
    CookiesManagerService,
    PartsAndSupportService,
    ContentProviderService
  ],
  exports: [
    FilenamePipe
  ]

})
export class CoreModule {
}
