import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../_core/auth/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSupportButtonHovered: boolean = false;
  isSupportMenuHovered: boolean = false;
  isSupportMenuSelected: boolean = false;

  isLogged = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.authStatus$().subscribe(e => this.isLogged = !!e);
    this.router.events.subscribe(e => {
      this.isSupportMenuSelected = this.router.url.includes('/support/');
    })
  }
}
