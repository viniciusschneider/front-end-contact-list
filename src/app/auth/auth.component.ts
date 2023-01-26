import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
    confirmPassword: new FormControl(''),
  });
  loading = false;
  isSingIn = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBarService: SnackBarService,
  ) {}

  async submit(): Promise<void> {
    if (!this.form.valid) {
      this.snackBarService.show('Formulário inválido!');
      return;
    }

    if (this.isSingIn) {
      this.singIn();
    } else {
      this.singUp();
    }
  }

  async singIn(): Promise<void> {
    try {
      this.loading = true;
      await this.authService.login({
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      }).toPromise();
      this.router.navigate(['private/contacts']);
    } catch (e) {
      if (e?.error?.status === 'UNAUTHORIZED') {
        this.snackBarService.show('Usuário não encontrado!');
      } else {
        this.snackBarService.unexpectedError();
      }
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  async singUp(): Promise<void> {
    const password = this.form.controls.password.value;
    const passwordConfirmation = this.form.controls.confirmPassword.value;
    if (password !== passwordConfirmation) {
      this.snackBarService.show('As senhas informadas não conferem!');
      return;
    }

    try {
      this.loading = true;
      await this.authService.register({
        email: this.form.controls.email.value,
        name: this.form.controls.name.value,
        password_confirmation: passwordConfirmation,
        password,
      }).toPromise();
      this.snackBarService.show('Usuário criado com sucesso!');
      this.changeForm();
    } catch (e) {
      if (e?.error?.status === 'DUPLICATE_EMAIL') {
        this.snackBarService.show('O email informado já está em uso!');
      } else {
        this.snackBarService.unexpectedError();
      }
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  changeForm(): void {
    this.isSingIn = !this.isSingIn;
    if (this.isSingIn) {
      this.form.controls.name.clearValidators();
      this.form.controls.name.updateValueAndValidity();
      this.form.controls.confirmPassword.clearValidators();
      this.form.controls.confirmPassword.updateValueAndValidity();
    } else {
      this.form.controls.name.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(50)]);
      this.form.controls.confirmPassword.setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(50)]);
    }
  }
}
