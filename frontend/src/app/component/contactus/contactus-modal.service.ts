import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Observable } from 'rxjs';
import { ContactUsDialogComponent, ContactUsDialogTextOptions } from './contactus-dialog.component';

@Injectable()
export class ContactUsModalService {
  constructor(
    public dialog: MdDialog,
  ) { }

  showModal(textOptions?: ContactUsDialogServiceTextOptions, width?: string): Observable<any> {
    let _textOptions: ContactUsDialogTextOptions = {
      message: 'Are you sure?',
      confirmText: 'Yes',
      denyText: 'No'
    };

    if (!!textOptions) {
      _textOptions.title = textOptions.title;
      _textOptions.message = textOptions.message || _textOptions.message;
      _textOptions.confirmText = textOptions.confirmText || _textOptions.confirmText;
      _textOptions.denyText = textOptions.denyText || _textOptions.denyText;
    }

    let dialogRef = this.dialog.open(ContactUsDialogComponent, {
      width: !!width ? width : undefined,
      position: { top: '70px' },
      data: {
        textOptions: _textOptions
      }
    });

    return dialogRef.afterClosed();
  }
}

export class ContactUsDialogServiceTextOptions {
  title?: string;
  message?: string;
  confirmText?: string;
  denyText?: string;
}