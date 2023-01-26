import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  show = false;

  toggle(): void {
    this.show = !this.show;
  }
}
