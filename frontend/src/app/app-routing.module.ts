import { PageTwoComponent } from './page-two/page-two.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageThreeComponent } from './page-three/page-three.component';

import { AuthGuardService as AuthGuard } from "./auth/auth-guard.service";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: StartPageComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '2', component: PageTwoComponent, canActivate: [AuthGuard]},
  { path: '3', component: PageThreeComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
