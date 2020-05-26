import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  template: `
    <div class="wrapper">
      <div class="list">
        <div
          class="list-item"
          [class.list-item--active]="999 === selectedObj"
          (click)="goToNewForm()">
          NEW
        </div>
        <div
          *ngFor="let key of [1,2,3,4,5]"
          class="list-item"
          [class.list-item--active]="key === selectedObj"
          (click)="goToObjective(key)">
          {{ key }}
        </div>
      </div>
      <router-outlet style="display: none;"></router-outlet>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  selectedObj: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  goToNewForm() {
    if (this.selectedObj === 999) {
      this.router.navigate(['objective'], {relativeTo: this.route.parent});
      this.selectedObj = null;
    } else {
      this.router.navigate([`new`], {relativeTo: this.route});
      this.selectedObj = 999;
    }
  }

  goToObjective(id: number) {
    if (this.selectedObj === id) {
      this.router.navigate(['objective'], {relativeTo: this.route.parent});
      this.selectedObj = null;
    } else {
      this.router.navigate([`${id}`], {relativeTo: this.route});
      this.selectedObj = id;
    }
  }
}
