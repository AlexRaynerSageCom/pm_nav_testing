import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ListComponent,
  InvalidRouteComponent,
  FormComponent,
  DetailsComponent,
  DashboardComponent,
  HomeComponent,
  TmPerfComponent,
  ReviewComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      },
      {
        path: 'tm/:id',
        component: TmPerfComponent,
        children: [
          {
            path: 'objective',
            component: ListComponent,
            children: [
              {
                path: 'new',
                component: FormComponent
              },
              {
                path: ':id',
                component: DetailsComponent,
                children: [
                  {
                    path: 'review',
                    component: ReviewComponent
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: InvalidRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
