import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'src/app/components/input-text/input-text.module';
import { FormControlPipeModule } from 'src/app/pipes/form-control-pipe.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FormControlPipeModule,
  ]
})
export class AuthModule {}
