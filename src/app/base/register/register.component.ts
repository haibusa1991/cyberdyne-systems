import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {IUserRegistration} from "../../models/IUserRegistration";
import {Router, RouterModule} from "@angular/router";
import {passwordValidator} from "../../Utils";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordsMatchValidator(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      let group = c.parent as FormGroup;
      let password = group?.controls?.['password'].value;
      let repass = c.value;
      let doMatch = password === repass;

      return !doMatch ? {passwordsMatch: true} : null;
    }
  }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    // password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator()]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator()]),
    repass: new FormControl('', [Validators.required, this.passwordsMatchValidator()]),
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    tos: new FormControl(false, [Validators.requiredTrue])
  })

  canSubmitForm: boolean = false;
  isAlreadyRegistered: boolean = false;
  isWaitingForServer: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.canSubmitForm = this.registerForm.status === 'INVALID'
    this.registerForm.statusChanges.subscribe(e => {
      this.canSubmitForm = e === 'INVALID';
    })

  }

  revalidatePasswordFields() {
    //nasty :(
    this.registerForm.controls.password.setValue(this.registerForm.controls.password.value);
    this.registerForm.controls.repass.setValue(this.registerForm.controls.repass.value);
  }

  onSubmit() {
    this.isWaitingForServer = true;
    let registrationData = (({address, email, name, password, phone}) => ({
      address,
      email,
      name,
      password,
      phone
    }))(this.registerForm.value);

    //todo remove log
    console.log(registrationData)
    this.authService.registerUser$(registrationData as IUserRegistration).subscribe({
      next: n => {
        // this.cookiesManager.setCredentials(n.user);
        this.authService.setAdditionalRegistrationData(registrationData as IUserRegistration).subscribe();
        this.router.navigate(['/support/summary']);
      },
      error: e => {
        this.isAlreadyRegistered = true;
        this.isWaitingForServer = false;
      }
    })
  }

}
