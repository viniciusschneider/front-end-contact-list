import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IContacts } from 'src/app/models/contacts.interface';
import { IDialogContactFormProps } from 'src/app/models/dialog-contact-form-props.interface';
import { DialogContactFormComponent } from './dialog-contact-form.component';

@Injectable({
  providedIn: 'root'
})
export class DialogContactFormService {

  constructor(
    private dialog: MatDialog,
  ) {}

  async create(): Promise<boolean> {
    const response = await this.dialog.open(DialogContactFormComponent, {
      data: { type: 'create' } as IDialogContactFormProps
    })
    .afterClosed()
    .toPromise();

    return !!response;
  }

  async edit(data: IContacts): Promise<boolean> {
    const response = await this.dialog.open(DialogContactFormComponent, {
      data: { type: 'edit', data } as IDialogContactFormProps
    })
    .afterClosed()
    .toPromise();

    return !!response;
  }
}
