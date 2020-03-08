import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RulerPageComponent} from './ruler-page/ruler-page.component';
import {RequestPageComponent} from './request-page/request-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ruler', component: RulerPageComponent },
  { path: 'request', component: RequestPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
