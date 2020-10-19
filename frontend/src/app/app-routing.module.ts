import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: '1', component: PageOneComponent },
  { path: '2', component: PageTwoComponent},
  { path: '3', component: PageThreeComponent},
  { path: '**', component: PageOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
