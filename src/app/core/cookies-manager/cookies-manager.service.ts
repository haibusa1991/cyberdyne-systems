import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CookiesManagerService {

  constructor(private cookieService: CookieService) {
  }

  setCredentials(userData: any | null): void {
    this.cookieService.set(environment.cookieName, JSON.stringify(userData));
  }

  getCredentials():any | null {
    if (this.cookieService.check('cdyne-systems')) {
      return JSON.parse(this.cookieService.get(environment.cookieName));
    }
    return null;
  }

  getUid(): string {
    return this.getCredentials()?.uid;
    // return 'dsa'
  }

}
