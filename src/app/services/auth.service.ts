import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISuccessResponse } from '../models/success.response';
import { ILoginParams } from '../models/login.params';
import { IRegisterParams } from '../models/register.params';
import { ILoginResponse } from '../models/login.response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly tokenName = 'TOKEN';

  get token(): string {
    return localStorage[this.tokenName] ?? '';
  }

  constructor(
    private httpCliente: HttpClient,
    private router: Router,
  ) {}

  register(params: IRegisterParams): Observable<ISuccessResponse> {
    return this.httpCliente.post<ISuccessResponse>(`${environment.baseUrl}/auth/register`, params);
  }

  login(params: ILoginParams): Observable<ILoginResponse> {
    return this.httpCliente.post<ILoginResponse>(`${environment.baseUrl}/auth/login`, params)
      .pipe(
        tap((response) => {
          localStorage[this.tokenName] = response.access_token;
        })
      );
  }

  refresh(): Observable<ILoginResponse> {
    return this.httpCliente.get<ILoginResponse>(`${environment.baseUrl}/auth/refresh`)
      .pipe(
        tap((response) => {
          localStorage[this.tokenName] = response.access_token;
        })
      );
  }

  logout(): Observable<ISuccessResponse> {
    return this.httpCliente.post<ISuccessResponse>(`${environment.baseUrl}/auth/logout`, {})
    .pipe(
      tap((response) => {
          this.clientLogout();
      })
    );
  }

  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
