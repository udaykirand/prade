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
      firstname: [''],
      lastname: [''],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      terms: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorDiagnostic = null;
    this.userService.register(this.form.value)
    .subscribe(data => {
      this.config.saveData("Product created successfully with id : "+data.data);
      this.router.navigate(['/']);
    },
    error => {
      this.submitted = false;
      if(error.status == 403) {
        this.errorDiagnostic = 'Please login as admin to update product';
      } else {
        this.errorDiagnostic = JSON.parse(error._body).message;
      }
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
