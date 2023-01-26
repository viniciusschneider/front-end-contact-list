import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputTextModule } from 'src/app/components/input-text/input-text.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogConfirmModule } from 'src/app/components/dialog-confirm/dialog-confirm.module';
import { DialogContactFormModule } from 'src/app/components/dialog-contact-form/dialog-contact-form.module';
import { FormControlPipeModule } from 'src/app/pipes/form-control-pipe.module';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatButtonModule,
    MatIconModule,
    InputTextModule,
    MatDividerModule,
    MatPaginatorModule,
    DialogConfirmModule,
    DialogContactFormModule,
    FormControlPipeModule,
  ]
})
export class ContactsModule { }
