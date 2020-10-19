import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageThreeComponent } from './page-three/page-three.component';

import { AuthGuardService as AuthGuard } from "./auth/auth-guard.service";

const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: '1', component: PageOneComponent, canActivate: [AuthGuard]},
  { path: '2', component: PageTwoComponent, canActivate: [AuthGuard]},
  { path: '3', component: PageThreeComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageOneComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
