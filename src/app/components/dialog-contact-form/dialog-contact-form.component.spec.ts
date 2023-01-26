import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlPipeModule } from 'src/app/pipes/form-control-pipe.module';
import { InputTextModule } from '../input-text/input-text.module';
import { DialogContactFormComponent } from './dialog-contact-form.component';

describe('DialogContactFormComponent', () => {
  let component: DialogContactFormComponent;
  let fixture: ComponentFixture<DialogContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContactFormComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        InputTextModule,
        FormControlPipeModule,
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {  provide: MatDialogRef, useValue: {} },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
