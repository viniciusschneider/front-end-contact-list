import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmComponent } from './dialog-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [DialogConfirmComponent]
})
export class DialogConfirmModule {}
