import { IContacts } from './contacts.interface';

export interface IDialogContactFormProps {
  type: 'create' | 'edit';
  data?: IContacts;
}
