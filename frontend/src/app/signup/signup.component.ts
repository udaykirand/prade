import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  UserService,
  AuthService,
  ProductService,
  ConfigService
} from '../service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  title = 'Register';
  form: FormGroup;
  submitted = false;
  errorDiagnostic: string;
  user:any;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private config:ConfigService
  ) { }

  ngOnInit() {
    if(this.userService.currentUser) {
      this.router.navigate(['admin']);
    }
    this.user = {};
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      terms: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorDiagnostic = null;
    this.userService.register(this.form.value)
    .subscribe(data => {
      console.log(data.data);
      this.config.saveData("Product created successfully with id : "+data.data);
      this.router.navigate(['/']);
    },
    error => {
      console.log(error.status);
      this.submitted = false;
      if(error.status == 403) {
        this.errorDiagnostic = 'Please login as admin to update product';
      } else {
        this.errorDiagnostic = 'Error occured while updating product. Please try again later.';
      }
    });
  }

  login() {
    console.log("Login pressed");
    this.router.navigate(['/login']);
  }

}
