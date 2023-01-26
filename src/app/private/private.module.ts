import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PrivateModule {}
