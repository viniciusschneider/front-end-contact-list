import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogConfirmService } from 'src/app/components/dialog-confirm/dialog-confirm.service';
import { DialogContactFormService } from 'src/app/components/dialog-contact-form/dialog-contact-form.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, startWith, switchMap, tap } from 'rxjs/operators';
import { IListContactsResponse } from 'src/app/models/list-contacts.response';
import { LoadingService } from 'src/app/services/loading.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { IPaginate } from 'src/app/models/paginate.interface';
import { IContacts } from 'src/app/models/contacts.interface';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnDestroy, OnInit {

  form = new FormGroup({
    search: new FormControl(''),
  });

  paginator: BehaviorSubject<IPaginate> = new BehaviorSubject({ limit: 10, page: 1 });
  paginator$: Observable<IPaginate> = this.paginator.asObservable();
  paginatorLimit: IPaginate = { limit: 10, page: 1 };
  contacts$: Observable<IListContactsResponse> = combineLatest([
    this.form.valueChanges.pipe(
      startWith(''),
      map((filter) => {
        this.paginator.next({ page: 1, limit: 10 });
        return filter;
      })
    ),
    this.paginator$.pipe(
      tap(paginator => {
        this.paginatorLimit.limit = paginator.limit;
        this.paginatorLimit.page = paginator.page;
      })
    )
  ])
  .pipe(
    debounceTime(300),
    switchMap(([filters, paginator]) => {
      this.loadingService.show();
      return this.contacsService.list({ ...filters, ...paginator });
    }),
    tap(() => {
      this.loadingService.close();
    })
  );

  constructor(
    private contacsService: ContactsService,
    private dialogConfirmService: DialogConfirmService,
    private dialogContactFormService: DialogContactFormService,
    private loadingService: LoadingService,
    private snackbarService: SnackBarService,
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.paginator.complete();
  }

  findContacts(): void {
    this.contacsService.list({ limit: 2, page: 1 }).toPromise();
  }

  async delete({ id, name }: IContacts): Promise<void> {
    const confirmDelete = await this.dialogConfirmService.confirm(`Deseja realmente excluir o contato ${name}?`);
    if (!confirmDelete) {
      return;
    }

    try {
      this.loadingService.show();
      await this.contacsService.delete(id).toPromise();
      this.snackbarService.show(`O contato ${name}, foi excluído com sucesso!`);
      this.refresh();
    } catch (e) {
      console.error(e);
      this.snackbarService.unexpectedError();
    } finally {
      this.loadingService.close();
    }
  }

  async create(): Promise<void> {
    const refresh = await this.dialogContactFormService.create();
    if (refresh) {
      this.refresh();
    }
  }

  refresh(): void {
    this.form.patchValue({ search: '' });
  }

  async edit(contact: IContacts): Promise<void> {
    const refresh = await this.dialogContactFormService.edit(contact);
    if (refresh) {
      this.refresh();
    }
  }

  paginate(page: PageEvent): void {
    this.paginator.next({ limit: page.pageSize, page: page.pageIndex + 1 });
  }
}
