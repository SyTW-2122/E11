import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyAccountComponent,
    SigninComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyAccountModule {}
