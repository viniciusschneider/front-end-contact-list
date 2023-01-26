import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DrawerService } from '../services/drawer.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public drawerService: DrawerService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

  async logout(): Promise<void> {
    try {
      this.loadingService.show();
      this.drawerService.toggle();
      await this.authService.logout().toPromise();
    } catch (e) {
      console.error(e);
      this.authService.clientLogout();
    } finally {
      this.loadingService.close();
    }
  }
}
