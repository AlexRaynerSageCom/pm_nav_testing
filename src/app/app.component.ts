import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app" style="height: 100%;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
