import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  fieldPasswordType: boolean = false;
  signInForm: FormGroup; 
  returnUrl: string;

  error = '';
  loading = false;
  submitted = false;

  constructor (
    private formBuilder: FormBuilder, // Objeto para crear formularios
    private route: ActivatedRoute, // Objeto para obtener parametros de la ruta
    private router: Router, // Objeto para navegar entre paginas
    private authenticationService: AuthenticationService // Objeto para autenticar usuarios
  ) { 
    // redirect to profile if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.signInForm.controls;  } // Obtiene los controles del formulario

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f["email"].value, this.f["password"].value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }

  togglefieldPasswordType() {
    this.fieldPasswordType = !this.fieldPasswordType;
  }
}
