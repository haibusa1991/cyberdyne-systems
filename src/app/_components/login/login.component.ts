import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_core/auth/auth.service";
import {IUserLogin} from "../../_models/IUserLogin";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  canSubmitForm: boolean = false;
  areCredentialsInvalid = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm.statusChanges.subscribe({
      next: e => {
        console.log(e)
        this.canSubmitForm = e === 'VALID';
      }
    })
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    // this.areCredentialsInvalid = true;

    this.authService.login$(this.loginForm.value as IUserLogin).subscribe({
      next: n => {
        console.log(n.user)
        this.router.navigate(['/user/summary']);
      },
      error: e => {
        console.log(e)
        this.areCredentialsInvalid = true;
      }
    })
  }
}
