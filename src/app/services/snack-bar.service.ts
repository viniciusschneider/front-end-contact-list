import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(
    private matSnackBar: MatSnackBar,
  ) {}

  show(message: string): void {
    this.matSnackBar.open(message, 'Fechar', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  unexpectedError(): void {
    this.show('Oops, ocorreu um erro inesperado!');
  }
}
