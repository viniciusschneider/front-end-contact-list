import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IListContactsResponse } from '../models/list-contacts.response';
import { Observable } from 'rxjs';
import { IListContactsParams } from '../models/list-contacts.params';
import { ISuccessResponse } from '../models/success.response';
import { IContacts } from '../models/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  list(params: IListContactsParams): Observable<IListContactsResponse> {
    if (!(params.search || '').trim()) {
      delete params.search;
    }

    return this.httpClient.get<IListContactsResponse>(`${environment.baseUrl}/contacts/list`, {
      params: new HttpParams({
        fromObject: {
          ...params,
          page: `${params.page}`,
          limit: `${params.limit}`,
        }
      })
    });
  }

  create(data: IContacts): Observable<ISuccessResponse> {
    const params = this.validateParams(data);
    return this.httpClient.post<ISuccessResponse>(`${environment.baseUrl}/contacts`, params);
  }

  update(params: IContacts, id: string): Observable<ISuccessResponse> {
    this.validateParams(params);
    return this.httpClient.put<ISuccessResponse>(`${environment.baseUrl}/contacts/${id}`, params);
  }

  delete(id: string): Observable<ISuccessResponse> {
    return this.httpClient.delete<ISuccessResponse>(`${environment.baseUrl}/contacts/${id}`);
  }

  private validateParams(params: IContacts): Partial<IContacts> {
    if (!params.email) {
      delete params.email;
    }
    if (!params.phone) {
      delete params.phone;
    }
    if (!params.whatsapp) {
      delete params.whatsapp;
    }
    if (!params.notes) {
      delete params.notes;
    }

    return params;
  }
}
