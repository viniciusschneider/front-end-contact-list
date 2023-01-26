import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmService {

  constructor(
    private dialog: MatDialog
  ) {}

  async confirm(message: string): Promise<boolean> {
    const response = await this.dialog.open(DialogConfirmComponent, {
      data: { message }
    })
    .afterClosed()
    .toPromise();

    return !!response;
  }
}
