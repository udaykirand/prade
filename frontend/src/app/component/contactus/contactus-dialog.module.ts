import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import {
  MdButtonModule,
  MdDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsDialogComponent } from './contactus-dialog.component';
import { ContactUsModalService } from './contactus-modal.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ContactUsDialogComponent],
  providers: [ContactUsModalService],
  entryComponents: [ContactUsDialogComponent],
})
export class ContactUsDialogModule {}