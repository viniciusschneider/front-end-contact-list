import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogContactFormService } from './dialog-contact-form.service';

describe('DialogContactFormService', () => {
  let service: DialogContactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ]
    });
    service = TestBed.inject(DialogContactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
