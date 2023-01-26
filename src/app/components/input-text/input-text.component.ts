import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

  @Input() type = 'text';
  @Input() prefixIcon = '';
  @Input() label = '';
  @Input() control: FormControl = new FormControl();

  showPassword = false;

  get hasErrors(): boolean {
    return !!this.control.errors;
  }

  get error(): string {
    if (this.control.errors?.required) {
      return `${this.label} é obrigatório`;
    } else if (this.control.errors?.email) {
      return 'Email digitado é inválido';
    } else if (this.control.errors?.minlength) {
      return `${this.label} deve ter no mínimo ${this.control.errors?.minlength?.requiredLength} caracteres`;
    } else if (this.control.errors?.maxlength) {
      return `${this.label} deve ter no máximo ${this.control.errors?.maxlength?.requiredLength} caracteres`;
    } else {
      return '';
    }
  }
}
