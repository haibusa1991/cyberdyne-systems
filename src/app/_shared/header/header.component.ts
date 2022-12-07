import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../_core/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSupportButtonHovered: boolean = false;
  isSupportMenuHovered: boolean = false;

  isLogged = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authStatus$().subscribe(e => this.isLogged = !!e);
  }
}
