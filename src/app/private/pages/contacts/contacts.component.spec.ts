import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogConfirmModule } from 'src/app/components/dialog-confirm/dialog-confirm.module';
import { DialogContactFormModule } from 'src/app/components/dialog-contact-form/dialog-contact-form.module';
import { InputTextModule } from 'src/app/components/input-text/input-text.module';
import { FormControlPipeModule } from 'src/app/pipes/form-control-pipe.module';
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        InputTextModule,
        MatDividerModule,
        MatPaginatorModule,
        DialogConfirmModule,
        DialogContactFormModule,
        FormControlPipeModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
