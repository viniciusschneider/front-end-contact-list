import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmService } from './dialog-confirm.service';

describe('DialogConfirmService', () => {
  let service: DialogConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ]
    });
    service = TestBed.inject(DialogConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
