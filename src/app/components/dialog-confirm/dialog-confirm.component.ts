import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    public dialogRef: MatDialogRef<DialogConfirmComponent>
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }
}
