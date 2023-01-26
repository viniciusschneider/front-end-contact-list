import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
    private domSanitizer: DomSanitizer,
    private drawerService: DrawerService,
    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.addSvgIcon(
      'whatsapp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../assets/icons8-whatsapp-48.svg')
    );

  }

  toggleDrawer(): void {
    this.drawerService.toggle();
  }
}
