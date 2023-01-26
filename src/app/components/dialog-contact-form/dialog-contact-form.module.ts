import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogContactFormComponent } from './dialog-contact-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from '../input-text/input-text.module';
import { FormControlPipeModule } from 'src/app/pipes/form-control-pipe.module';

@NgModule({
  declarations: [
    DialogContactFormComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    InputTextModule,
    FormControlPipeModule,
  ]
})
export class DialogContactFormModule {}
