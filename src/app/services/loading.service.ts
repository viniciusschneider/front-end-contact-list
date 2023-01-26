import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  state = false;

  show(): void {
    this.state = true;
  }

  close(): void {
    this.state = false;
  }
}
