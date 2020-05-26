import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="list">
      <div
        *ngFor="let key of [1,2,3,4,5]"
        class="list-item"
        (click)="navToTm(key)">
        {{ key }}
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navToTm(id: number) {
    this.router.navigate([`/tm/${id}/objective`]);
  }

}
