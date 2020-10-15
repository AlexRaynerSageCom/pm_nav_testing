import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tm-perf',
  template: `
    <div class="container">
      <div
        *ngIf="processEnabled"
        class="processes">
        <div class="tabs">
          <div class="tab">
            Objectives
          </div>
          <div class="tab">
            360 Feedback
          </div>
        </div>
        <div class="tm-perf">
          <router-outlet style="display: none;"></router-outlet>
        </div>
      </div>

      <app-conversation
        *ngIf="showConvo"
        class="convo"
        [class.convo--only]="!processEnabled">
      </app-conversation>
    </div>
  `,
  styleUrls: ['./tm-perf.component.scss']
})
export class TmPerfComponent implements OnInit {
  processEnabled: boolean;

  showConvo: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route);
    this.processEnabled = this.route.children.length > 0;
    this.showConvo = !this.route.firstChild?.firstChild;

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.showConvo = !this.route.firstChild?.firstChild;
        this.processEnabled = val.url.split('/').length > 3;
      }
    });
  }
}
