import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <div class="tabs">
        <div class="tab" (click)="goToDashboard()">
          My Team
        </div>
        <div class="tab" (click)="goToObjectives()">
          My Performance
        </div>
        <div class="tab" (click)="goToConversation()">
          Conversations Only
        </div>
      </div>

      <div class="view">
        <router-outlet style="display: none;"></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['']);
  }

  goToConversation() {
    this.router.navigate(['tm/1']);
  }

  goToObjectives() {
    this.router.navigate(['tm/1/objective']);
  }
}
