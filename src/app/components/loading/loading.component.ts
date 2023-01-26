import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  get show(): boolean {
    return this.loadingService.state;
  }

  constructor(
    private loadingService: LoadingService,
  ) {}
}
