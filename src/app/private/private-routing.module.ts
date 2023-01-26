import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
      },
      {
        path: '**',
        redirectTo: 'contacts',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
