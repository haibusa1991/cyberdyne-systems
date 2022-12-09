import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../_core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.logout$().subscribe({
      next: n => {
        setTimeout(()=> this.router.navigate(['']),1500)
      },
      error: e => {
        //todo remove log
        console.log('error logging out');
        console.log(e.code);
        console.log(e.message);
      }
    })
  }

}
