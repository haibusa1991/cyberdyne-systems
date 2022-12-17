import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {catchError, map, Observable, of, switchMap} from 'rxjs';
import {AuthService} from "./auth.service";
import {useLegacySass} from "@angular-devkit/build-angular/src/utils/environment-options";

@Injectable({
  providedIn: 'root'
})
export class UserPanelGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.authStatus$().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
         return this.router.parseUrl('/login');
        }
      }),
      catchError(() => {
        return of(false);
      }))
  }
}



