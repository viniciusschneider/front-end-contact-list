import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get isAuthenticated(): boolean {
    return !!this.authService.token;
  }

  constructor(
    private authService: AuthService,
    private drawerService: DrawerService,
  ) {}

  toggleDrawer(): void {
    this.drawerService.toggle();
  }
}
