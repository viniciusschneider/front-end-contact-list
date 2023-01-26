import { IPaginate } from './paginate.interface';

export interface IListContactsParams extends IPaginate {
  search?: string;
}
