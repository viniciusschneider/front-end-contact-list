import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogContactFormProps } from 'src/app/models/dialog-contact-form-props.interface';
import { ContactsService } from 'src/app/services/contacts.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-dialog-contact-form',
  templateUrl: './dialog-contact-form.component.html',
  styleUrls: ['./dialog-contact-form.component.scss']
})
export class DialogContactFormComponent {

  form = new FormGroup({
    name: new FormControl(this.data?.data?.name || '', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
    email: new FormControl(this.data?.data?.email || '', [Validators.email, Validators.minLength(8), Validators.maxLength(50)]),
    phone: new FormControl(this.data?.data?.phone || '', [Validators.minLength(12), Validators.maxLength(13)]),
    whatsapp: new FormControl(this.data?.data?.whatsapp || '', [Validators.minLength(12), Validators.maxLength(13)]),
    notes: new FormControl(this.data?.data?.notes || '', Validators.maxLength(200)),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialogContactFormProps,
    public dialogRef: MatDialogRef<DialogContactFormComponent>,
    private loadingService: LoadingService,
    private snackBarService: SnackBarService,
    private contactsService: ContactsService,
  ) {}

  async submit(): Promise<void> {
    try {
      if (!this.form.valid) {
        this.snackBarService.show('Formulário inválido!');
        return;
      }

      this.loadingService.show();
      if (this.data.type === 'create') {
        await this.contactsService.create({...this.form.getRawValue()}).toPromise();
      } else {
        await this.contactsService.update({...this.form.getRawValue()}, this.data.data.id).toPromise();
      }

      this.snackBarService.show(`Contato ${this.data.type === 'create' ? 'adicionado' : 'atualizado'} com sucesso!`);
      this.dialogRef.close(true);
    } catch (e) {
      console.error(e);
      this.snackBarService.unexpectedError();
    } finally {
      this.loadingService.close();
    }
  }
}
