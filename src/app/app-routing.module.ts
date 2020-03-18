import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RulerPageComponent} from './ruler-page/ruler-page.component';
import {RequestPageComponent} from './request-page/request-page.component';
import {ChartComponent} from './chart/chart.component';
import {CoreIdeaComponent} from './core-idea/core-idea.component';
import {ThankYouPageComponent} from './thank-you/thank-you-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ruler', component: RulerPageComponent },
  { path: 'request', component: RequestPageComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'core-idea', component: CoreIdeaComponent },
  { path: 'thank-you', component: ThankYouPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
