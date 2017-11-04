import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ConfigService } from '../service/config.service';
import { Headers } from '@angular/http';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  textOptions:  ConfirmDialogTextOptions;
  form: FormGroup;
  submitted = false;
  errorDiagnostic: string;
    constructor(
      private dialogRef: MdDialogRef<ConfirmDialogComponent>,
      @Inject(MD_DIALOG_DATA) private data: any,
      private formBuilder: FormBuilder,
      private apiService: ApiService,
      private config: ConfigService
    ) { }
  
    ngOnInit() {
      this.textOptions = this.data.textOptions;
      this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(64)])],
      productId: [''],
      productName: ['']
      });
    }

    submit() {
      const body = `{"contact":"${this.form.value.email}", "productId":"${this.textOptions.productId}", "productName":"${this.textOptions.productName}"}`;
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.apiService.post(this.config.contact_url, body, headers)
      .subscribe(data => {
        // Display toast
      });
      this.dialogRef.close();
    }

    closeModal() {
      this.dialogRef.close();
    }
  }
  
  export class ConfirmDialogTextOptions {
    title?: string;
    message: string;
    confirmText: string;
    denyText: string;
    productId: string;
    productName: string;
  }
  