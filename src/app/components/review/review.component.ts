import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  template: `
    <div class="review">
      REVIEW
      <button (click)="discard()">
        Discard
      </button>
    </div>
  `,
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  discard() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
