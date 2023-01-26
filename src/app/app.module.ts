import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoadingModule } from './components/loading/loading.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl } from '@angular/material/paginator';

const paginatorIntl = new MatPaginatorIntl();
paginatorIntl.itemsPerPageLabel = 'Itens por página';
paginatorIntl.nextPageLabel = 'Próxima página'
paginatorIntl.previousPageLabel = 'Página anterior';
paginatorIntl.getRangeLabel = (page, pageSize, length) => {
  const currentPage = length === 0 ? 1 : page + 1;
  const amountPages = length === 0 ? 1 : Math.ceil(length / pageSize);
  return `${currentPage} - ${amountPages} de ${length}`;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LoadingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: paginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
