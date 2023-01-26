import { IContacts } from './contacts.interface';

export interface IListContactsResponse {
  items: IContacts[];
  total: number;
}
