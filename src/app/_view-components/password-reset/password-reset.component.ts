import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../_core/auth/auth.service";
import {IUserEmail} from "../../_models/IUserEmail";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  })

  canSubmitForm: boolean = false;
  hasSubmitted: boolean = false;
  isValidEmail: boolean = true;
  isWaitingForResponse: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.passwordResetForm.statusChanges.subscribe({
      next: e => {
        //todo remove log
        console.log(e)
        this.canSubmitForm = e === 'VALID';
      }
    })
  }

  onSubmit() {
    this.isWaitingForResponse = true;
    console.log(this.passwordResetForm.value);

    this.authService.sendPasswordResetEmail$(this.passwordResetForm.value as IUserEmail).subscribe({
      next: n => {
        this.hasSubmitted = true;
        this.isWaitingForResponse = false;
      }, error: e => {
        this.isValidEmail = false;
        this.isWaitingForResponse = false;
      }
    })
  }
}
