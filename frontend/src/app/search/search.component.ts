import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  UserService,
  AuthService,
  ProductService
} from '../service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'Product Search';
  form: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Diagnostic message from received
   * form request error
   */
  errorDiagnostic: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      searchtext: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])]
    });

  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.submitted = true;
    this.errorDiagnostic = null;

    this.productService.searchProduct(this.form.value)
    // show me the animation
    .delay(1000)
    .subscribe(data => {
      if(data.data.length != 0)
        this.router.navigate(['productdetails/'+data.data[0].id]);
      else
        this.errorDiagnostic = 'No search results found';
    },
    error => {
      console.log(error.status);
      this.submitted = false;
      this.errorDiagnostic = 'Error occured while creating product. Please try again later.';
    });

  }


}
