import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  template: `
    <div class="details">
      <div>
        DETAILS
        <button (click)="goToReview()">
          Review
        </button>
      </div>

      <router-outlet style="display: none;"></router-outlet>
    </div>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  goToReview() {
    this.router.navigate(['review'], {relativeTo: this.route});
  }
}
