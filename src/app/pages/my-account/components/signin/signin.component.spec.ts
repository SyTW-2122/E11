import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a signInForm', () => {
    expect(component.signInForm).toBeTruthy();
  });

  it('Should have a returnUrl', () => {
    expect(component.returnUrl).toEqual('/');
  });

  it('Should get all values ​​from getter f', () => {
    component.signInForm.controls["email"].setValue("test");
    component.signInForm.controls["password"].setValue("test");
    let x = component.f;
    expect(x["email"].value).toEqual("test");
    expect(x["password"].value).toEqual("test");
  });

  it('Should have a method called onSubmit', () => {
    let onsubmit = spyOn(component, 'onSubmit')
    component.onSubmit();
    expect(onsubmit).toHaveBeenCalled();
  });

  it('Should call onSubmit function successfully, but failing on access data authentication', () => {
    component.signInForm.controls["email"].setValue("");
    component.signInForm.controls["password"].setValue("");
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(component.error).toEqual("");
    expect(component.loading).toBeFalsy();
  });
  
  it('Should call onSubmit function successfully, with the correct access data', () => {
    component.signInForm.controls["email"].setValue("test");
    component.signInForm.controls["password"].setValue("test");
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(component.loading).toBeTruthy();
  });

  it('Should change boolean value to true, on calling fieldPasswordType function', () => {
    component.togglefieldPasswordType();
    expect(component.fieldPasswordType).toBeTruthy();
  });
});
