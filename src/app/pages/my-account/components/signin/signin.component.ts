import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  fieldPasswordType: boolean = false;

  constructor() {}

  onSubmit() {
    console.log(this.email);
    console.log(this.password);

    // Verificamos que la sintaxis del correo sea correcta
    if (this.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
      console.log('Correo valido');
    } else {
      console.log('Correo invalido');
    }

    // Verificamos que la sintaxis del password sea correcta
    if (this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#_])[A-Za-z\d$@$!%*?&#_]{8,}/)) {
      console.log('Password valido');
    } else {
      console.log('Password invalido');
    }
  }

  togglefieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }

}
