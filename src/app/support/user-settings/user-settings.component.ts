import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {IUserRegistration} from "../../models/IUserRegistration";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../Utils";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userData: IUserRegistration = {
    address: '',
    name: '',
    password: '',
    phone: '',
    email: ''
  };

  isBusy = false;
  hasActiveSection = false;
  isAlreadyRegistered = true;
  isValidPassword = true;

  shouldShowPasswordPrompt = false;

  activeSection: { [K: string]: boolean } = {
    'email': false,
    'password': false,
    'phone': false,
    'address': false,
  }

  emailField!: FormGroup;
  passwordField!: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) {

    this.emailField = formBuilder.group({
      email: [null, [Validators.email, Validators.required]]
    });
    this.emailField.controls['email'].disable();

    this.passwordField = formBuilder.group({
      password: [null, [passwordValidator(), Validators.required, Validators.minLength(8)]]
    });
    this.passwordField.controls['password'].disable();
  }

  ngOnInit(): void {
    this.authService.getAdditionalRegistrationData$().subscribe(e => {
        this.userData = {...e, password: 'password placeholder for looks'} as IUserRegistration;
      }
    );
  }

  onChange(event: Event) {
    // @ts-ignore
    this.setActiveSection(event.target?.id as string);
  }

  setActiveSection(sectionName: string) {
    this.setNeutralState();

    this.hasActiveSection = true;
    switch (sectionName) {
      case 'email-section':
        this.activeSection['email'] = true;
        this.emailField.controls['email'].enable();
        this.emailField.controls['email'].setValue(this.userData.email);
        break;
      case 'password-section':
        this.activeSection['password'] = true;
        this.passwordField.controls['password'].enable();
        this.passwordField.controls['password'].setValue('');
        break;
      case 'phone-section':
        this.activeSection['phone'] = true;
        break;
      case 'address-section':
        this.activeSection['address'] = true;
        break;
    }
  }

  onEmailChange() {
    this.authService.setNewEmailAddress$(this.emailField.controls?.['email'].value)
      .subscribe({
        next: n => {
          console.log('changing email')
          console.log(n)
          this.isAlreadyRegistered = false;
        },
        error: e => {
          if (e.code == 'auth/requires-recent-login') {
            this.shouldShowPasswordPrompt = true;
          }
          console.log(e.code)

          // this.isAlreadyRegistered = true;
        }
      })
  }

  onPasswordChange() {
    console.log('password changed!')
    this.setNeutralState();
  }

  onPhoneChange() {
    console.log('phone changed!')
    this.setNeutralState();
  }

  onAddressChange() {
    console.log('address changed!')
    this.setNeutralState();
  }

  onCancel() {
    this.setNeutralState();
  }

  doNothing() {

  }

  setNeutralState() {
    Object.entries(this.activeSection).forEach(e => this.activeSection[e[0]] = false);
    this.hasActiveSection = false;
    // this.isAlreadyRegistered = false;

    this.emailField.controls['email'].disable();
    this.emailField.controls['email'].setValue(this.userData.email);

    this.passwordField.controls['password'].disable();
    this.passwordField.controls['password'].setValue(this.userData.password);
  }

  onEmailValidation(event: Event) {
    // @ts-ignore
    console.log(event.target.value);
  }

  onPasswordCancel(event: boolean) {
    this.shouldShowPasswordPrompt = event
  }

  onPasswordOk(event: string) {
    this.shouldShowPasswordPrompt = false;
    console.log(event)
  }
}
