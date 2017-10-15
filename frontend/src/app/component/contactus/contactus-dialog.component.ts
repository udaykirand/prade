import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, ConfigService } from '../../service';
import { Headers } from '@angular/http';

@Component({
  templateUrl: './contactus-dialog.component.html',
  styleUrls: ['./contactus-dialog.component.css']
})
export class ContactUsDialogComponent implements OnInit {
  textOptions:  ContactUsDialogTextOptions;
  form: FormGroup;
  submitted = false;
  errorDiagnostic: string;
    constructor(
      private dialogRef: MdDialogRef<ContactUsDialogComponent>,
      @Inject(MD_DIALOG_DATA) private data: any,
      private formBuilder: FormBuilder,
      private apiService: ApiService,
      private config: ConfigService,
      public snackBar: MdSnackBar
    ) { }
  
    ngOnInit() {
      this.textOptions = this.data.textOptions;
      this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(64)])],
      message: ['']
      });
    }

    submit() {
      const body = `{"contact":"${this.form.value.email}", "message":"${this.form.value.message}"}`;
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.apiService.post(this.config.contact_url, body, headers)
      .subscribe(data => {
      
      });
      this.dialogRef.close();
    }

    closeModal() {
      this.dialogRef.close();
    }
  }
  
  export class ContactUsDialogTextOptions {
    title?: string;
    message: string;
    confirmText: string;
    denyText: string;
  }
  