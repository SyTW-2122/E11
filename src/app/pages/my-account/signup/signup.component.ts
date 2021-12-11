import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  fieldPasswordType: boolean = false;
  fieldRepeatPasswordType: boolean = false;

  constructor() { }

  /*form: FormGroup =  new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    gender: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    creditCardNumber: new FormControl(''),
    expirationDate: new FormControl(''),
    securityCode: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
    
  });*/

  onSubmit() {

  }

  togglefieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

  togglefieldRepeatPasswordType() {
    this.fieldRepeatPasswordType = !this.fieldRepeatPasswordType;
  }
}