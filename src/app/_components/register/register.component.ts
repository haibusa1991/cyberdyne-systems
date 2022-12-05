import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordValidator(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if (!c.value) {
        return null;
      }
      let hasUpperCase = /[A-Z]+/.test(c.value);
      let hasLowerCase = /[a-z]+/.test(c.value);
      let hasNumeric = /[0-9]+/.test(c.value);

      let passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordValid: true} : null;
    }
  }

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
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator()]),
    repass: new FormControl('', [Validators.required, this.passwordsMatchValidator()]),
    name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    tos: new FormControl(false, [Validators.requiredTrue])
  })

  canSubmitForm: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.registerForm.statusChanges.subscribe(e => {
      console.log(e)
      this.canSubmitForm = e === 'INVALID';
    })

  }

  revalidatePasswordFields() {
    //nasty :(
    this.registerForm.controls.password.setValue(this.registerForm.controls.password.value);
    this.registerForm.controls.repass.setValue(this.registerForm.controls.repass.value);
  }

  onSubmit() {
    let registrationData = (({address, email, name, password, phone}) => ({
      address,
      email,
      name,
      password,
      phone
    }))(this.registerForm.value);
    //todo 0. Add disable-enable looks of the register button. 1. Create new auth service; 2. register user;
    //registrationService.register(registrationData);
    //router.redirect '/home'

  }

}
