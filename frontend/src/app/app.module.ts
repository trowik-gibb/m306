import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CreateModalComponent } from './create-modal/create-modal.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    PageTwoComponent,
    PageThreeComponent,
    LoginComponent,
    CreateModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule,
        FormsModule

    ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
