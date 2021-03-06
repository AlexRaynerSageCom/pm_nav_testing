import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ConversationComponent,
  DashboardComponent,
  DetailsComponent,
  FormComponent,
  HomeComponent,
  ListComponent,
  InvalidRouteComponent,
  ReviewComponent,
  TmPerfComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    DashboardComponent,
    DetailsComponent,
    FormComponent,
    HomeComponent,
    InvalidRouteComponent,
    ListComponent,
    ReviewComponent,
    TmPerfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
