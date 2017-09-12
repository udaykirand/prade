import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    ) { }
  
    ngOnInit() {
      this.textOptions = this.data.textOptions;
      this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(64)])]
      });
    }

    submit() {
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
  