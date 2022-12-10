import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPasswordResetQuery} from "../../_models/IPasswordResetQuery";
import {FormControl, FormGroup} from "@angular/forms";
import {passwordValidator} from "../_shared/FormValidators";
import {AuthService} from "../../_core/auth/auth.service";
import {IUserEmail} from "../../_models/IUserEmail";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  passwordResetQuery: IPasswordResetQuery = <IPasswordResetQuery>{};
  canSubmitForm: boolean = false;
  hasResetPassword: boolean = false;
  isWaitingForResponse: boolean = true;
  canResetPassword: boolean = true;
  userEmailAddress: IUserEmail = {} as IUserEmail;

  newPasswordForm = new FormGroup({
      password: new FormControl('', [passwordValidator()])
    }
  )

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(e => {
      this.passwordResetQuery = e as IPasswordResetQuery;
      this.authService.verifyPasswordResetCode$(this.passwordResetQuery.oobCode).subscribe({
        next: n => {
          this.isWaitingForResponse = false;
          this.userEmailAddress = {email: n};
          // todo remove log
          console.log(n) //email
        },
        error: e => {
          this.isWaitingForResponse = false;
          this.canResetPassword = false;

          //todo remove log
          console.log(e)
        }
      })
    });

    this.newPasswordForm.statusChanges.subscribe({
      next: e => {
        this.canSubmitForm = e === 'VALID';
      }
    })
  }

  onSubmit() {
    this.isWaitingForResponse = true;

    this.authService.changePassword$(this.passwordResetQuery.oobCode, this.newPasswordForm.value.password as string)
      .subscribe({
        next: () => {
          this.isWaitingForResponse = false;
          this.hasResetPassword = true;
        },
        error: () => {
          this.canResetPassword = false;
        }
      });
  }
}
